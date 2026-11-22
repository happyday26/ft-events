/**
 * Dev launcher that:
 * 1. Frees port 3000 if a stale/hung Next process is holding it
 * 2. Starts `next dev`
 * 3. Polls /api/health and force-restarts if the server stops answering
 */
import { execSync, spawn } from "node:child_process";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PORT = 3000;
const HEALTH_URL = `http://127.0.0.1:${PORT}/api/health`;
const HEALTH_TIMEOUT_MS = 8_000;
const POLL_MS = 15_000;
const FAIL_STREAK_TO_RESTART = 3;
const STARTUP_GRACE_MS = 90_000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const require = createRequire(import.meta.url);
const nextBin = require.resolve("next/dist/bin/next", { paths: [root] });

function freePort(port) {
  try {
    const out = execSync("netstat -ano", { encoding: "utf8" });
    const pids = new Set();
    for (const line of out.split(/\r?\n/)) {
      if (!line.includes(`:${port}`) || !line.includes("LISTENING")) continue;
      const parts = line.trim().split(/\s+/);
      const pid = parts[parts.length - 1];
      if (/^\d+$/.test(pid) && pid !== "0") pids.add(pid);
    }
    for (const pid of pids) {
      try {
        // /T kills the whole process tree (needed on Windows for next's children).
        execSync(`taskkill /F /T /PID ${pid}`, { stdio: "ignore" });
        console.log(`[dev] freed port ${port} (killed PID tree ${pid})`);
      } catch {
        /* already gone */
      }
    }
  } catch {
    /* ignore */
  }
}

function killTree(pid) {
  if (!pid) return;
  try {
    execSync(`taskkill /F /T /PID ${pid}`, { stdio: "ignore" });
  } catch {
    try {
      process.kill(pid);
    } catch {
      /* ignore */
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function healthOk() {
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), HEALTH_TIMEOUT_MS);
  try {
    const res = await fetch(HEALTH_URL, {
      cache: "no-store",
      signal: ac.signal,
    });
    return res.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
}

let child = null;
let startedAt = 0;
let failStreak = 0;
let shuttingDown = false;
let restarting = false;

function startNext() {
  freePort(PORT);
  failStreak = 0;
  startedAt = Date.now();
  child = spawn(process.execPath, [nextBin, "dev", "-p", String(PORT)], {
    cwd: root,
    stdio: "inherit",
    env: process.env,
    windowsHide: true,
  });
  child.on("exit", (code, signal) => {
    if (shuttingDown || restarting) return;
    console.log(
      `[dev] next exited (code=${code}, signal=${signal}); restarting in 2s…`,
    );
    child = null;
    setTimeout(() => {
      if (!shuttingDown) startNext();
    }, 2000);
  });
}

async function forceRestart(reason) {
  if (restarting || shuttingDown) return;
  restarting = true;
  console.warn(`[dev] ${reason}`);
  const toKill = child;
  child = null;
  if (toKill?.pid) killTree(toKill.pid);
  await sleep(1200);
  freePort(PORT);
  restarting = false;
  if (!shuttingDown) startNext();
}

async function watchdog() {
  while (!shuttingDown) {
    await sleep(POLL_MS);
    if (!child || shuttingDown || restarting) continue;
    if (Date.now() - startedAt < STARTUP_GRACE_MS) continue;

    const ok = await healthOk();
    if (ok) {
      failStreak = 0;
      continue;
    }

    failStreak += 1;
    console.warn(
      `[dev] health check failed (${failStreak}/${FAIL_STREAK_TO_RESTART})`,
    );
    if (failStreak < FAIL_STREAK_TO_RESTART) continue;

    failStreak = 0;
    await forceRestart("server unresponsive — force-restarting next…");
  }
}

function shutdown() {
  shuttingDown = true;
  if (child?.pid) killTree(child.pid);
  freePort(PORT);
  process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

startNext();
watchdog();
