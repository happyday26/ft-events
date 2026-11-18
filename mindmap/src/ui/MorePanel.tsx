import { useRef, useState } from 'react'
import { getAiProvider } from '../plugins/ai/provider'
import { getPluginRegistry } from '../plugins/registry'
import { templates } from '../templates'
import type { MindDocument, MindNode } from '../core/schema'
import { markers } from '../plugins/markers'

interface MorePanelProps {
  open: boolean
  onClose: () => void
  onApplyTemplate: (doc: MindDocument) => void
  onImport: (file: File) => void
  onExportId: (id: string) => void
  onTheme: (id: string) => void
  onAiTree: (root: MindNode) => void
  onPresent: () => void
  onExpandAll: () => void
  onCollapseAll: () => void
  themeId: string
  exportOnly?: boolean
}

export function MorePanel({
  open,
  onClose,
  onApplyTemplate,
  onImport,
  onExportId,
  onTheme,
  onAiTree,
  onPresent,
  onExpandAll,
  onCollapseAll,
  themeId,
  exportOnly = false,
}: MorePanelProps) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [prompt, setPrompt] = useState('Study plan for finals')
  const [aiBusy, setAiBusy] = useState(false)
  const registry = getPluginRegistry()

  if (!open) return null

  const runAi = async (
    kind: 'from-prompt' | 'expand-branch' | 'summarize-to-map' | 'from-url' | 'from-pdf',
  ) => {
    const provider = getAiProvider()
    if (!provider) return
    setAiBusy(true)
    try {
      const root = await provider.generate({ kind, prompt })
      onAiTree(root)
    } finally {
      setAiBusy(false)
    }
  }

  return (
    <div className="rl-drawer-backdrop" onClick={onClose} role="presentation">
      <aside
        className="rl-drawer"
        onClick={(e) => e.stopPropagation()}
        aria-label={exportOnly ? 'Export' : 'More tools'}
      >
        <div className="rl-drawer-head">
          <h2>{exportOnly ? 'Export' : 'More'}</h2>
          <button type="button" className="rl-btn rl-btn-ghost" onClick={onClose}>
            Close
          </button>
        </div>

        <section>
          <h3>Export</h3>
          <div className="rl-chip-row">
            {registry.exporters.map((ex) => (
              <button
                key={ex.id}
                type="button"
                className="rl-chip"
                onClick={() => onExportId(ex.id)}
              >
                {ex.label}
              </button>
            ))}
          </div>
        </section>

        {!exportOnly && (
          <>
            <section>
              <h3>Templates</h3>
              <div className="rl-stack">
                {templates.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className="rl-list-btn"
                    onClick={() => onApplyTemplate(t.build())}
                  >
                    <strong>{t.label}</strong>
                    <span>{t.description}</span>
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h3>Theme</h3>
              <div className="rl-chip-row">
                {registry.themes.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className={`rl-chip ${themeId === t.id ? 'is-active' : ''}`}
                    style={{ borderColor: t.preview.accent }}
                    onClick={() => onTheme(t.id)}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h3>Markers</h3>
              <p className="rl-hint">Tag nodes via engine note/tag UI; palette:</p>
              <div className="rl-chip-row">
                {markers.map((m) => (
                  <span key={m.id} className="rl-marker" style={{ background: m.color }}>
                    {m.label}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3>AI (stub provider)</h3>
              <textarea
                className="rl-textarea"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={3}
              />
              <div className="rl-chip-row">
                <button
                  type="button"
                  className="rl-chip"
                  disabled={aiBusy}
                  onClick={() => void runAi('from-prompt')}
                >
                  Generate map
                </button>
                <button
                  type="button"
                  className="rl-chip"
                  disabled={aiBusy}
                  onClick={() => void runAi('expand-branch')}
                >
                  Expand
                </button>
                <button
                  type="button"
                  className="rl-chip"
                  disabled={aiBusy}
                  onClick={() => void runAi('summarize-to-map')}
                >
                  Summarize
                </button>
                <button
                  type="button"
                  className="rl-chip"
                  disabled={aiBusy}
                  onClick={() => void runAi('from-url')}
                >
                  URL stub
                </button>
                <button
                  type="button"
                  className="rl-chip"
                  disabled={aiBusy}
                  onClick={() => void runAi('from-pdf')}
                >
                  PDF stub
                </button>
              </div>
            </section>

            <section>
              <h3>File &amp; view</h3>
              <div className="rl-chip-row">
                <button
                  type="button"
                  className="rl-chip"
                  onClick={() => fileRef.current?.click()}
                >
                  Import JSON
                </button>
                <input
                  ref={fileRef}
                  type="file"
                  accept=".json,.rootline.json,application/json"
                  hidden
                  onChange={(e) => {
                    const f = e.target.files?.[0]
                    if (f) onImport(f)
                    e.target.value = ''
                  }}
                />
                <button type="button" className="rl-chip" onClick={onPresent}>
                  Present
                </button>
                <button type="button" className="rl-chip" onClick={onExpandAll}>
                  Expand all
                </button>
                <button type="button" className="rl-chip" onClick={onCollapseAll}>
                  Collapse all
                </button>
              </div>
            </section>

            <section>
              <h3>Keys</h3>
              <ul className="rl-keys">
                <li>
                  <kbd>Enter</kbd> sibling
                </li>
                <li>
                  <kbd>Tab</kbd> child
                </li>
                <li>
                  <kbd>F2</kbd> edit
                </li>
                <li>Drag node to reparent</li>
              </ul>
            </section>
          </>
        )}
      </aside>
    </div>
  )
}
