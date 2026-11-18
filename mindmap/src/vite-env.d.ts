/// <reference types="vite/client" />

declare module 'simple-mind-map/dist/simpleMindMap.umd.min' {
  export default class MindMap {
    constructor(options: Record<string, unknown>)
    on(event: string, callback: (...args: unknown[]) => void): void
    off(event: string, callback: (...args: unknown[]) => void): void
    execCommand(name: string, ...args: unknown[]): void
    getData(withConfig?: boolean): unknown
    setData(data: unknown): void
    setFullData(data: unknown): void
    setLayout(layout: string, notRender?: boolean): void
    getLayout(): string
    setTheme(theme: string, notRender?: boolean): void
    getTheme(): string
    export(type: string, isDownload?: boolean, fileName?: string, ...rest: unknown[]): Promise<unknown>
    destroy(): void
    resize(): void
    view: {
      fit(): void
      reset(): void
      translateX(x: number): void
      translateY(y: number): void
      setScale(scale: number): void
      getTransformData(): unknown
    }
    renderer: {
      setRootNodeCenter(): void
      activeNodeList: unknown[]
      findNodeByUid(uid: string): unknown
    }
    command: {
      addHistory(): void
    }
    keyCommand: {
      addShortcut(key: string, fn: () => void): void
      removeShortcut(key: string, fn?: () => void): void
    }
    addPlugin(plugin: unknown, opt?: unknown): void
    removePlugin(plugin: unknown): void
    opt: Record<string, unknown>
    el: HTMLElement
  }
}

declare module 'simple-mind-map/src/plugins/Export.js' {
  const Export: unknown
  export default Export
}

declare module 'simple-mind-map/src/plugins/ExportPDF.js' {
  const ExportPDF: unknown
  export default ExportPDF
}

declare module 'simple-mind-map/src/plugins/Drag.js' {
  const Drag: unknown
  export default Drag
}

declare module 'simple-mind-map/src/plugins/Select.js' {
  const Select: unknown
  export default Select
}

declare module 'simple-mind-map/src/plugins/KeyboardNavigation.js' {
  const KeyboardNavigation: unknown
  export default KeyboardNavigation
}

declare module 'simple-mind-map/src/plugins/Demonstrate.js' {
  const Demonstrate: unknown
  export default Demonstrate
}

declare module 'simple-mind-map/src/plugins/MiniMap.js' {
  const MiniMap: unknown
  export default MiniMap
}

declare module 'simple-mind-map/src/plugins/RichText.js' {
  const RichText: unknown
  export default RichText
}

declare module 'simple-mind-map/dist/simpleMindMap.esm.css' {}
