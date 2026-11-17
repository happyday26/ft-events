/**
 * Canonical mindmap document — single source of truth.
 * Decoupled from simple-mind-map's `{ data: { text }, children }` shape.
 */

export const SCHEMA_VERSION = 1 as const

export type MarkerId =
  | 'priority-high'
  | 'priority-medium'
  | 'priority-low'
  | 'done'
  | 'idea'
  | 'question'
  | 'risk'

export interface NodeRichContent {
  note?: string
  link?: string
  imageUrl?: string
  attachmentName?: string
  attachmentDataUrl?: string
  markers?: MarkerId[]
  branchColor?: string
  icon?: string
}

/** Canonical hierarchical node. */
export interface MindNode {
  id: string
  topic: string
  children: MindNode[]
  collapsed?: boolean
  rich?: NodeRichContent
}

export type LayoutId =
  | 'mindMap'
  | 'logicalStructure'
  | 'organizationStructure'
  | 'catalogOrganization'
  | 'timeline'
  | 'fishbone'
  | 'matrix' // reserved / approximated until engine supports it

export interface DocumentMeta {
  title: string
  createdAt: string
  updatedAt: string
  layout: LayoutId
  themeId: string
  /** Hooks for future sync (command log / CRDT). */
  sync?: {
    revision: number
    lastLocalCommandId?: string
  }
}

export interface MindDocument {
  schemaVersion: typeof SCHEMA_VERSION | number
  meta: DocumentMeta
  root: MindNode
}

export function createEmptyDocument(title = 'Untitled map'): MindDocument {
  const now = new Date().toISOString()
  return {
    schemaVersion: SCHEMA_VERSION,
    meta: {
      title,
      createdAt: now,
      updatedAt: now,
      layout: 'mindMap',
      themeId: 'rootline-ink',
      sync: { revision: 0 },
    },
    root: {
      id: crypto.randomUUID(),
      topic: 'Central idea',
      children: [],
    },
  }
}

export function touchDocument(doc: MindDocument): MindDocument {
  return {
    ...doc,
    meta: {
      ...doc.meta,
      updatedAt: new Date().toISOString(),
      sync: {
        revision: (doc.meta.sync?.revision ?? 0) + 1,
        lastLocalCommandId: doc.meta.sync?.lastLocalCommandId,
      },
    },
  }
}
