import { useEffect, useMemo, useState } from 'react'
import type { LayoutId, MindDocument, MindNode } from './core/schema'
import { createEmptyDocument } from './core/schema'
import { MindMapEngine } from './engine/MindMapEngine'
import { createAutosave, loadActiveDocument } from './persistence/idb'
import { importJsonFile } from './persistence/fileIO'
import { getPluginRegistry } from './plugins/registry'
import { CanvasHost } from './ui/CanvasHost'
import { MorePanel } from './ui/MorePanel'
import { Toolbar } from './ui/Toolbar'

export default function App() {
  const [ready, setReady] = useState(false)
  const [docSeed, setDocSeed] = useState<MindDocument | null>(null)
  const [layout, setLayout] = useState<LayoutId>('mindMap')
  const [themeId, setThemeId] = useState('rootline-ink')
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved'>('idle')
  const [moreOpen, setMoreOpen] = useState(false)
  const [exportOpen, setExportOpen] = useState(false)

  const autosave = useMemo(() => createAutosave(350), [])

  useEffect(() => {
    let cancelled = false
    void (async () => {
      const existing = await loadActiveDocument()
      if (cancelled) return
      const doc = existing ?? createEmptyDocument()
      setDocSeed(doc)
      setLayout(doc.meta.layout)
      setThemeId(doc.meta.themeId)
      setReady(true)
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const engine = useMemo(() => {
    if (!docSeed) return null
    const eng = new MindMapEngine(docSeed)
    eng.setSaveHandler((doc) => {
      setSaveState('saving')
      setLayout(doc.meta.layout)
      setThemeId(doc.meta.themeId)
      autosave.schedule(doc)
      window.setTimeout(() => setSaveState('saved'), 200)
    })
    return eng
  }, [docSeed, autosave])

  useEffect(() => {
    return () => {
      void autosave.flushNow()
    }
  }, [autosave])

  if (!ready || !engine) {
    return (
      <div className="rl-boot">
        <div className="rl-brand rl-brand-hero">Rootline</div>
        <p>Opening your map…</p>
      </div>
    )
  }

  const runExport = async (id: string) => {
    const plugin = getPluginRegistry().exporters.find((e) => e.id === id)
    if (!plugin) return
    await plugin.export(engine.document, {
      exportNative: (type, fileName) => engine.exportNative(type, fileName),
      getDocument: () => engine.document,
    })
  }

  return (
    <div className="rl-app">
      <Toolbar
        layout={layout}
        saveState={saveState}
        onUndo={() => engine.commands.exec('BACK')}
        onRedo={() => engine.commands.exec('FORWARD')}
        onAddChild={() => engine.commands.exec('INSERT_CHILD_NODE')}
        onFit={() => engine.fit()}
        onLayout={(id) => {
          setLayout(id)
          engine.commands.exec('SET_LAYOUT', id)
        }}
        onExportMenu={() => setExportOpen(true)}
        onMore={() => setMoreOpen(true)}
      />

      <main className="rl-main">
        <CanvasHost engine={engine} />
      </main>

      <MorePanel
        open={exportOpen}
        exportOnly
        themeId={themeId}
        onClose={() => setExportOpen(false)}
        onApplyTemplate={() => undefined}
        onImport={() => undefined}
        onExportId={(id) => void runExport(id)}
        onTheme={() => undefined}
        onAiTree={() => undefined}
        onPresent={() => undefined}
        onExpandAll={() => undefined}
        onCollapseAll={() => undefined}
      />

      <MorePanel
        open={moreOpen}
        themeId={themeId}
        onClose={() => setMoreOpen(false)}
        onApplyTemplate={(doc: MindDocument) => {
          engine.commands.exec('APPLY_TEMPLATE', doc)
          setLayout(doc.meta.layout)
          setThemeId(doc.meta.themeId)
          setMoreOpen(false)
        }}
        onImport={(file) => {
          void importJsonFile(file).then((doc) => {
            engine.commands.exec('APPLY_TEMPLATE', doc)
            setLayout(doc.meta.layout)
            setThemeId(doc.meta.themeId)
            setMoreOpen(false)
          })
        }}
        onExportId={(id) => void runExport(id)}
        onTheme={(id) => {
          setThemeId(id)
          engine.commands.exec('SET_THEME', id)
        }}
        onAiTree={(root: MindNode) => {
          engine.commands.exec('AI_REPLACE_TREE', root)
          setMoreOpen(false)
        }}
        onPresent={() => {
          engine.startDemonstrate()
          setMoreOpen(false)
        }}
        onExpandAll={() => engine.commands.exec('EXPAND_ALL')}
        onCollapseAll={() => engine.commands.exec('UNEXPAND_ALL')}
      />
    </div>
  )
}
