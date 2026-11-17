import type { LayoutId } from '../core/schema'
import { getPluginRegistry } from '../plugins/registry'

const registry = getPluginRegistry()

interface ToolbarProps {
  onUndo: () => void
  onRedo: () => void
  onAddChild: () => void
  onFit: () => void
  onLayout: (id: LayoutId) => void
  onExportMenu: () => void
  onMore: () => void
  layout: LayoutId
  saveState: 'saved' | 'saving' | 'idle'
}

/** Progressive disclosure: ~6 primary controls. */
export function Toolbar({
  onUndo,
  onRedo,
  onAddChild,
  onFit,
  onLayout,
  onExportMenu,
  onMore,
  layout,
  saveState,
}: ToolbarProps) {
  return (
    <header className="rl-chrome">
      <div className="rl-brand-block">
        <div className="rl-brand">Rootline</div>
        <p className="rl-tagline">Think in branches</p>
      </div>

      <nav className="rl-toolbar" aria-label="Map controls">
        <button type="button" className="rl-btn" onClick={onUndo} title="Undo (Ctrl+Z)">
          Undo
        </button>
        <button type="button" className="rl-btn" onClick={onRedo} title="Redo (Ctrl+Y)">
          Redo
        </button>
        <button
          type="button"
          className="rl-btn rl-btn-accent"
          onClick={onAddChild}
          title="Child node (Tab)"
        >
          Child
        </button>
        <label className="rl-select-wrap">
          <span className="rl-sr">Layout</span>
          <select
            className="rl-select"
            value={layout}
            onChange={(e) => onLayout(e.target.value as LayoutId)}
            title="Layout"
          >
            {registry.layouts.map((l) => (
              <option key={l.id} value={l.id}>
                {l.label}
                {l.deferred ? ' (approx)' : ''}
              </option>
            ))}
          </select>
        </label>
        <button type="button" className="rl-btn" onClick={onFit} title="Fit to view">
          Fit
        </button>
        <button type="button" className="rl-btn" onClick={onExportMenu} title="Export">
          Export
        </button>
        <button type="button" className="rl-btn rl-btn-ghost" onClick={onMore} title="More">
          More
        </button>
      </nav>

      <div className="rl-save" aria-live="polite">
        {saveState === 'saving' ? 'Saving…' : saveState === 'saved' ? 'Saved' : ''}
      </div>
    </header>
  )
}
