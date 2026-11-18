# Rootline user guide

Rootline is a simple mind-map app for students and note-takers. You open it in your browser, start typing on a central idea, and grow branches from there. No account. No sign-in. Your map stays on this device and saves itself as you work.

---

## Open and start

1. Open Rootline (for local development: run the app and visit the printed URL, usually `http://localhost:5173`).
2. You’ll see a green **Central idea** node in the middle of a dark canvas.
3. Click that node (or press **F2**) and rename it to your topic—lecture title, essay question, project name, whatever you’re mapping.

If you used Rootline in this browser before, it reloads your last map automatically.

```bash
cd mindmap
npm install
npm run dev
```

---

## Move around the canvas

| Action | How |
| --- | --- |
| Zoom in / out | Scroll the mouse wheel (or trackpad pinch/scroll) |
| Pan (slide the view) | Right-click and drag the background |
| Select a node | Left-click the node |
| Fit everything on screen | Click **Fit** in the toolbar |

Tip: after you add a lot of branches, hit **Fit** so nothing is off-screen.

---

## Create and edit nodes

Think of each box as a node (an idea). Nodes connect into a tree: a parent can have children; children can have their own children.

### Keyboard shortcuts

| Key | What it does |
| --- | --- |
| **Enter** | Add a sibling (same level as the selected node) |
| **Tab** | Add a child (one level under the selected node) |
| **F2** | Edit the selected node’s text |
| **Ctrl+Z** | Undo |
| **Ctrl+Y** | Redo |

### Mouse and toolbar

1. Click a node to select it.
2. Click the green **Child** button (or press **Tab**) to add a branch under it.
3. Double-click a node or press **F2** to rename it.
4. Drag a node onto another node to **reparent** it (move that branch under a new parent).

### Paste a list into a tree

Copy a nested bullet list from notes or markdown, select a node, and paste. Rootline turns the list into a matching branch structure under that node.

---

## Undo, redo, collapse, expand

- **Undo** / **Redo** sit in the top toolbar (also **Ctrl+Z** / **Ctrl+Y**).
- Open **More → Expand all** or **Collapse all** to show or hide every nested branch at once.
- Collapsing is useful when a section gets big and you want to focus on the outline.

---

## Layouts

Use the **Layout** dropdown in the toolbar to rearrange the same ideas in a different shape. Your content stays; only the arrangement changes.

| Layout | Best for |
| --- | --- |
| Mind map | Free brainstorming, radiating from the center |
| Logic | Left-to-right outline thinking |
| Org chart | Goals, teams, project breakdowns |
| Catalog | Nested catalog / outline style |
| Timeline | Agendas, sequences, workshop flow |
| Fishbone | Cause-and-effect / fishbone diagrams |
| Matrix (approx) | Placeholder shape for now—true matrix layout is coming later |

---

## Templates

Open **More → Templates** and pick a starter map instead of a blank canvas:

| Template | What you get |
| --- | --- |
| Brainstorming | Wild ideas, Constraints, Promising threads, Park for later |
| Project planning | Goal, Milestones, Workstreams, Risks—starts in Org chart layout |
| Workshop | Opening, Activities, Decisions, Takeaways—starts in Timeline layout |

Applying a template replaces the current map with that starter tree (you can still Undo if you opened it by mistake).

---

## Look and feel (themes)

Under **More → Theme**, choose how the map looks:

- **Ink Grove** — dark green canvas, lime accent (default)
- **Slate Focus** — cool dark slate
- **Daylight** — lighter paper-style background

Themes change colors and mood; they don’t change your ideas.

---

## Notes, links, images, markers, colors

### What you can do today

- Edit each node as **plain text** (the simple, reliable editor for this MVP).
- Use **markers** (status tags) conceptually from the palette in **More → Markers**: High, Medium, Low, Done, Idea, Question, Risk. Tagging happens through the underlying map engine’s note/tag tools when available.
- The saved file format can keep **notes**, **links**, **images**, and **branch colors** when those fields are present (for example after import).

### Coming later

- Full rich-text editing inside nodes (bold, lists inside a node, etc.)
- A clearer Rootline-only UI for attaching notes, links, and images to every node

---

## Autosave and your files

Rootline is local-first:

- Edits autosave in the background after a short pause. Watch the top-right status: **Saving…** then **Saved**.
- There is no cloud sync and no account in this version—closing another browser or clearing site data can lose the in-browser copy.
- To keep a durable copy you own, use **Export → JSON (owned file)** (a `.rootline.json` file).
- To reopen that file later: **More → Import JSON**.

---

## Export

Click **Export** (or use the Export section inside **More**) and pick a format:

| Format | Use it when you want to… |
| --- | --- |
| PNG | Drop a picture into slides or a chat |
| SVG | Keep a sharp vector graphic |
| PDF | Print or hand in a printable sheet |
| JSON (owned file) | Archive or reload your full Rootline map |
| OPML | Move the outline into other outline / RSS-style tools |

Word, PowerPoint, and FreeMind polish are coming later.

---

## Present (demo mode)

**More → Present** starts a built-in presentation / demonstrate mode so you can walk through the map without the everyday editing chrome in the way. Exit with the engine’s normal leave/close control for that mode (often Escape or the on-screen exit, depending on the demo overlay).

---

## AI helpers (offline stub)

Under **More → AI (stub provider)** you’ll see tools like Generate map, Expand, Summarize, URL stub, and PDF stub.

These are offline placeholders—they build a sample tree from your prompt text so you can try the workflow. They do not call a live AI service and do not read real URLs or PDFs yet. Live AI providers are coming later.

---

## Quick tour of the toolbar

| Control | Purpose |
| --- | --- |
| Undo / Redo | Step history back and forward |
| Child | Add a child under the selected node |
| Layout | Switch map arrangement |
| Fit | Zoom/pan so the whole map is visible |
| Export | Download PNG, SVG, PDF, JSON, or OPML |
| More | Templates, themes, markers, AI stub, import, present, expand/collapse, shortcut reminder |

---

## What’s coming later

Briefly deferred for this MVP (so you know it’s intentional, not missing from your install):

- Accounts, share links, and cross-device sync
- True matrix layout (current option is approximate)
- Live AI (real generate / URL / PDF)
- Richer in-node formatting and Word/PPT export polish

Until then, Rootline’s job is straightforward: open, branch, rearrange, export—and keep thinking in branches.

---

## Related docs

- [README](../README.md) — how to run and test
- Architecture note lives in the Project store (`docs/mvp-architecture.md`) for the product brief
