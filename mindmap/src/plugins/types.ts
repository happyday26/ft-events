import type { LayoutId, MarkerId, MindDocument, MindNode } from '../core/schema'

export interface ThemePlugin {
  id: string
  label: string
  /** simple-mind-map theme name or custom theme object key */
  engineTheme: string
  preview: { bg: string; accent: string; node: string }
}

export interface MarkerPlugin {
  id: MarkerId
  label: string
  color: string
}

export interface ExportFormatPlugin {
  id: string
  label: string
  extensions: string[]
  export(doc: MindDocument, engine: EngineExportApi): Promise<void>
}

export interface EngineExportApi {
  exportNative(type: 'png' | 'svg' | 'pdf' | 'json', fileName?: string): Promise<void>
  getDocument(): MindDocument
}

export interface AiGenerateRequest {
  kind: 'from-prompt' | 'expand-branch' | 'summarize-to-map' | 'from-url' | 'from-pdf'
  prompt: string
  contextNode?: MindNode
}

export interface AiProvider {
  id: string
  label: string
  generate(req: AiGenerateRequest): Promise<MindNode>
}

export interface LayoutOption {
  id: LayoutId
  label: string
  /** Engine layout id; matrix maps to catalogOrganization until native support. */
  engineLayout: string
  deferred?: boolean
}

export interface PluginRegistrySnapshot {
  themes: ThemePlugin[]
  markers: MarkerPlugin[]
  exporters: ExportFormatPlugin[]
  aiProviders: AiProvider[]
  layouts: LayoutOption[]
}
