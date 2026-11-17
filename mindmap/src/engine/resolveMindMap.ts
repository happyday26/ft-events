import MindMapModule from 'simple-mind-map/dist/simpleMindMap.umd.min'

export type MindMapInstance = {
  on(event: string, callback: (...args: unknown[]) => void): void
  off?(event: string, callback: (...args: unknown[]) => void): void
  execCommand(name: string, ...args: unknown[]): void
  getData(withConfig?: boolean): unknown
  setData(data: unknown): void
  setLayout(layout: string, notRender?: boolean): void
  setTheme(theme: string, notRender?: boolean): void
  export(
    type: string,
    isDownload?: boolean,
    fileName?: string,
    ...rest: unknown[]
  ): Promise<unknown>
  destroy(): void
  resize(): void
  view: { fit(): void }
  demonstrate?: { enter?: () => void }
  el?: HTMLElement | null
  addPlugin?: (plugin: unknown, opt?: unknown) => void
  removePlugin?: (plugin: unknown) => void
}

export type MindMapConstructor = {
  new (options: Record<string, unknown>): MindMapInstance
  usePlugin: (plugin: unknown, opt?: unknown) => MindMapConstructor
  hasPlugin?: (plugin: unknown) => number
  pluginList: Array<{ instanceName?: string }>
}

function isCtor(v: unknown): v is MindMapConstructor {
  return typeof v === 'function' && typeof (v as MindMapConstructor).usePlugin === 'function'
}

/**
 * Vite/ESM interop for the UMD build:
 * `import X from '...umd.min'` → `{ default: { default: MindMap } }`
 */
export function resolveMindMap(): MindMapConstructor {
  const mod = MindMapModule as unknown as
    | MindMapConstructor
    | { default?: MindMapConstructor | { default?: MindMapConstructor } }

  if (isCtor(mod)) return mod

  const outer = (mod as { default?: unknown }).default
  if (isCtor(outer)) return outer

  if (outer && typeof outer === 'object') {
    const nested = (outer as { default?: unknown }).default
    if (isCtor(nested)) return nested
  }

  throw new Error('Unable to resolve simple-mind-map MindMap constructor from UMD build')
}

/**
 * UMD full.js registers RichText. Rich text measurement requires `mindMap.el`
 * during async layout; if React tears down mid-flight, el is null and render
 * crashes. Plain text nodes avoid that path for the MVP.
 */
export function disableBundledRichText(MindMap: MindMapConstructor): void {
  if (!Array.isArray(MindMap.pluginList)) return
  MindMap.pluginList = MindMap.pluginList.filter(
    (p) => p?.instanceName !== 'richText',
  )
}
