# Rootline (mindmap MVP)

Local-first, keyboard-first mind maps for students and note-takers.  
Engine: [simple-mind-map](https://github.com/wanglin2/mind-map) (MIT), wrapped behind thin adapters.

## Run

```bash
cd mindmap
npm install
npm run dev
```

Open the printed local URL (default `http://localhost:5173`).

## Scripts

| Script        | Purpose                          |
|---------------|----------------------------------|
| `npm run dev` | Vite dev server                  |
| `npm run build` | Production build               |
| `npm test`    | Perf budgets + acceptance unit tests |
| `npm run preview` | Preview production build     |

## Architecture (short)

- Canonical document: versioned `{ schemaVersion, meta, root: { topic, children[] } }`
- Mutations via `CommandBus` → simple-mind-map `execCommand` / setData
- Persistence: IndexedDB autosave + JSON/OPML export users own
- Plugins: themes, markers, exporters, AI provider (stub by default)

See Project store doc `docs/mvp-architecture.md` for the full note.
