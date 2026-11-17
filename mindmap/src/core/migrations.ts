import { sanitizeTopic } from './adapter'
import {
  SCHEMA_VERSION,
  createEmptyDocument,
  type MindDocument,
  type MindNode,
} from './schema'

type Migrator = (raw: unknown) => unknown

/** v0: bare `{ topic, children }` or simple-mind-map export without wrapper. */
function migrateV0ToV1(raw: unknown): MindDocument {
  const base = createEmptyDocument()
  if (!raw || typeof raw !== 'object') return base

  const obj = raw as Record<string, unknown>

  // Already looks like MindDocument
  if ('root' in obj && obj.root && typeof obj.root === 'object') {
    const root = normalizeNode(obj.root)
    const meta = (obj.meta as MindDocument['meta']) ?? base.meta
    return {
      schemaVersion: SCHEMA_VERSION,
      meta: {
        ...base.meta,
        ...meta,
        title: meta.title || base.meta.title,
        layout: meta.layout || 'mindMap',
        themeId: meta.themeId || 'rootline-ink',
      },
      root,
    }
  }

  // Canonical bare tree { topic, children }
  if ('topic' in obj) {
    return {
      ...base,
      root: normalizeNode(obj),
    }
  }

  // simple-mind-map shape { data: { text }, children }
  if ('data' in obj) {
    return {
      ...base,
      root: fromEngineNode(obj),
    }
  }

  return base
}

function fromEngineNode(node: unknown): MindNode {
  const n = (node ?? {}) as {
    data?: { text?: string; uid?: string; expand?: boolean; [k: string]: unknown }
    children?: unknown[]
  }
  const data = n.data ?? {}
  return {
    id: (data.uid as string) || crypto.randomUUID(),
    topic: String(data.text ?? 'Node'),
    collapsed: data.expand === false,
    children: (n.children ?? []).map(fromEngineNode),
    rich: extractRich(data),
  }
}

function extractRich(data: Record<string, unknown>) {
  const rich: MindNode['rich'] = {}
  if (typeof data.note === 'string') rich.note = data.note
  if (typeof data.hyperlink === 'string') rich.link = data.hyperlink
  if (typeof data.image === 'string') rich.imageUrl = data.image
  if (Array.isArray(data.tag)) {
    rich.markers = data.tag as MindNode['rich'] extends { markers?: infer M } ? M : never
  }
  return Object.keys(rich).length ? rich : undefined
}

function normalizeNode(node: unknown): MindNode {
  const n = (node ?? {}) as Partial<MindNode> & { text?: string; data?: { text?: string } }
  const topic =
    n.topic ??
    n.text ??
    n.data?.text ??
    'Node'
  return {
    id: n.id || crypto.randomUUID(),
    topic: sanitizeTopic(String(topic)),
    collapsed: n.collapsed,
    rich: n.rich,
    children: Array.isArray(n.children) ? n.children.map(normalizeNode) : [],
  }
}

const MIGRATIONS: Record<number, Migrator> = {
  0: migrateV0ToV1,
}

/**
 * Load any historical file into the current schema version.
 * Old files never break — unknown versions fall back to best-effort v0 path.
 */
export function migrateDocument(raw: unknown): MindDocument {
  if (!raw || typeof raw !== 'object') {
    return createEmptyDocument()
  }

  const obj = raw as { schemaVersion?: number }
  let version =
    typeof obj.schemaVersion === 'number' ? obj.schemaVersion : 0

  let current: unknown = raw
  while (version < SCHEMA_VERSION) {
    const step = MIGRATIONS[version]
    if (!step) {
      current = migrateV0ToV1(current)
      break
    }
    current = step(current)
    version += 1
  }

  const doc = current as MindDocument
  return {
    ...doc,
    schemaVersion: SCHEMA_VERSION,
    root: normalizeNode(doc.root),
  }
}
