import {
  documentToEngineData,
  engineDataToRoot,
  toEngineTree,
  type EngineNode,
} from '../core/adapter'
import { CommandBus, type CommandName } from '../core/commands'
import { subtreeFromList } from '../core/pasteList'
import {
  createEmptyDocument,
  type LayoutId,
  type MindDocument,
  type MindNode,
} from '../core/schema'
import { getPluginRegistry, layouts } from '../plugins/registry'
import {
  disableBundledRichText,
  resolveMindMap,
  type MindMapConstructor,
  type MindMapInstance,
} from './resolveMindMap'

export type SaveHandler = (doc: MindDocument) => void

const MindMapClass: MindMapConstructor = resolveMindMap()
disableBundledRichText(MindMapClass)

/**
 * The UMD full build (`simpleMindMap.umd.min`) already registers Drag, Export,
 * ExportPDF, Demonstrate, KeyboardNavigation, etc. at module load (see package
 * `full.js`). RichText is stripped — its measure path needs `el` during async
 * layout and crashes under React mount/unmount. Plain text is enough for MVP.
 */
function ensurePlugins(): void {
  if (typeof MindMapClass.usePlugin !== 'function') {
    throw new Error('MindMap.usePlugin missing — UMD interop failed')
  }
  disableBundledRichText(MindMapClass)
}

export class MindMapEngine {
  private mindMap: MindMapInstance | null = null
  private doc: MindDocument
  private bus: CommandBus
  private onSave: SaveHandler | null = null
  private destroyed = false

  constructor(initial?: MindDocument) {
    this.doc = initial ?? createEmptyDocument()
    this.bus = new CommandBus((name, ...args) => this.handleCommand(name, args))
  }

  get document(): MindDocument {
    return this.doc
  }

  get commands(): CommandBus {
    return this.bus
  }

  setSaveHandler(handler: SaveHandler) {
    this.onSave = handler
  }

  mount(el: HTMLElement): void {
    if (this.mindMap) this.destroy()
    this.destroyed = false
    ensurePlugins()

    const registry = getPluginRegistry()
    const layout =
      layouts.find((l) => l.id === this.doc.meta.layout)?.engineLayout ??
      'mindMap'
    const theme =
      registry.themes.find((t) => t.id === this.doc.meta.themeId)?.engineTheme ??
      'classic4'

    this.mindMap = new MindMapClass({
      el,
      data: documentToEngineData(this.doc),
      layout,
      theme,
      themeConfig: {
        backgroundColor: '#0c1412',
        lineColor: '#7fa82e',
        root: {
          fillColor: '#b8e649',
          color: '#102016',
          borderColor: 'transparent',
          fontSize: 18,
        },
        second: {
          fillColor: '#1a2e28',
          color: '#e7f2ea',
          borderColor: '#3d5c4f',
        },
        node: {
          fillColor: '#13201c',
          color: '#e7f2ea',
          borderColor: '#2a4036',
        },
      },
      readonly: false,
      mousewheelAction: 'zoom',
      useLeftKeySelectionRightKeyDrag: true,
      initRootNodePosition: ['center', 'center'],
      defaultInsertSecondLevelNodeText: 'Topic',
      defaultInsertBelowSecondLevelNodeText: 'Idea',
      customHandleClipboardText: (text: string) => {
        const subtree = subtreeFromList(text)
        if (!subtree) return text
        return {
          simpleMindMap: true,
          data: toEngineTree(subtree),
        }
      },
    })

    this.mindMap.on('data_change', () => {
      this.syncFromEngine()
    })

    const activateRoot = () => {
      const root = (
        this.mindMap as unknown as {
          renderer?: { root?: { active?: () => void } }
        }
      ).renderer?.root
      root?.active?.()
    }

    // Layout finishes via asyncRun ticks — activate root when the tree is ready.
    this.mindMap.on('node_tree_render_end', () => {
      activateRoot()
      this.mindMap?.view?.fit?.()
    })
    // Fallback if the event name differs across versions
    window.setTimeout(() => {
      activateRoot()
      this.mindMap?.view?.fit?.()
    }, 120)
  }

  private syncFromEngine(): void {
    if (!this.mindMap || this.destroyed) return
    const data = this.mindMap.getData(false) as EngineNode
    this.doc = {
      ...this.doc,
      root: engineDataToRoot(data),
      meta: {
        ...this.doc.meta,
        updatedAt: new Date().toISOString(),
      },
    }
    this.onSave?.(this.doc)
  }

  private handleCommand(name: CommandName, args: unknown[]): void {
    if (!this.mindMap) return

    switch (name) {
      case 'INSERT_NODE':
        this.ensureActiveNode()
        this.mindMap.execCommand('INSERT_NODE')
        break
      case 'INSERT_CHILD_NODE':
        this.ensureActiveNode()
        this.mindMap.execCommand('INSERT_CHILD_NODE')
        break
      case 'REMOVE_NODE':
        this.mindMap.execCommand('REMOVE_NODE')
        break
      case 'BACK':
        this.mindMap.execCommand('BACK')
        break
      case 'FORWARD':
        this.mindMap.execCommand('FORWARD')
        break
      case 'EXPAND_ALL':
        this.mindMap.execCommand('EXPAND_ALL')
        break
      case 'UNEXPAND_ALL':
        this.mindMap.execCommand('UNEXPAND_ALL')
        break
      case 'RESET_LAYOUT':
        this.mindMap.execCommand('RESET_LAYOUT')
        this.fit()
        break
      case 'SET_LAYOUT': {
        const layoutId = args[0] as LayoutId
        const engineLayout =
          layouts.find((l) => l.id === layoutId)?.engineLayout ?? 'mindMap'
        this.doc.meta.layout = layoutId
        this.mindMap.setLayout(engineLayout)
        this.onSave?.(this.doc)
        break
      }
      case 'SET_THEME': {
        const themeId = args[0] as string
        const theme =
          getPluginRegistry().themes.find((t) => t.id === themeId)?.engineTheme ??
          'classic4'
        this.doc.meta.themeId = themeId
        this.mindMap.setTheme(theme)
        this.onSave?.(this.doc)
        break
      }
      case 'APPLY_TEMPLATE': {
        const next = args[0] as MindDocument
        this.replaceDocument(next)
        break
      }
      case 'AI_REPLACE_TREE': {
        const root = args[0] as MindNode
        this.doc = { ...this.doc, root }
        this.mindMap.setData(toEngineTree(root))
        this.mindMap.view.fit()
        this.onSave?.(this.doc)
        break
      }
      case 'PASTE_NESTED_LIST': {
        const text = String(args[0] ?? '')
        const subtree = subtreeFromList(text)
        if (!subtree) return
        this.mindMap.execCommand(
          'INSERT_CHILD_NODE',
          false,
          [],
          { text: subtree.topic, uid: subtree.id },
          subtree.children.map(toEngineTree),
        )
        break
      }
      default:
        break
    }
  }

  replaceDocument(doc: MindDocument): void {
    this.doc = doc
    if (!this.mindMap) return
    const layout =
      layouts.find((l) => l.id === doc.meta.layout)?.engineLayout ?? 'mindMap'
    const theme =
      getPluginRegistry().themes.find((t) => t.id === doc.meta.themeId)
        ?.engineTheme ?? 'classic4'
    this.mindMap.setData(documentToEngineData(doc))
    this.mindMap.setLayout(layout)
    this.mindMap.setTheme(theme)
    this.mindMap.view.fit()
    this.onSave?.(this.doc)
  }

  /** Prefer an active node; otherwise activate the root. */
  private ensureActiveNode(): void {
    const renderer = (
      this.mindMap as unknown as {
        renderer?: {
          activeNodeList?: unknown[]
          root?: { active?: () => void }
        }
      }
    ).renderer
    if (!renderer) return
    if ((renderer.activeNodeList?.length ?? 0) > 0) return
    renderer.root?.active?.()
  }

  fit(): void {
    this.mindMap?.view?.fit?.()
  }

  resize(): void {
    this.mindMap?.resize?.()
  }

  async exportNative(
    type: 'png' | 'svg' | 'pdf' | 'json',
    fileName?: string,
  ): Promise<void> {
    if (!this.mindMap) return
    await this.mindMap.export(
      type,
      true,
      fileName || this.doc.meta.title || 'map',
    )
  }

  startDemonstrate(): void {
    this.mindMap?.demonstrate?.enter?.()
  }

  destroy(): void {
    this.destroyed = true
    try {
      this.mindMap?.destroy?.()
    } catch {
      /* ignore */
    }
    this.mindMap = null
  }
}
