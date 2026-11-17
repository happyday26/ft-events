import type { MindDocument, MindNode } from './schema'

/** simple-mind-map engine node shape. */
export interface EngineNode {
  data: {
    text: string
    uid?: string
    expand?: boolean
    note?: string
    hyperlink?: string
    hyperlinkTitle?: string
    image?: string
    imageTitle?: string
    imageSize?: { width: number; height: number; custom?: boolean }
    tag?: string[]
    icon?: string[]
    [key: string]: unknown
  }
  children: EngineNode[]
}

/** Strip accidental HTML / over-escaped rich-text leftovers from older saves. */
export function sanitizeTopic(raw: string): string {
  let text = String(raw ?? '')
  for (let i = 0; i < 6; i++) {
    const next = text
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
    if (next === text) break
    text = next
  }
  text = text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  return text || 'Node'
}

export function toEngineTree(node: MindNode): EngineNode {
  const data: EngineNode['data'] = {
    text: sanitizeTopic(node.topic),
    uid: node.id,
    expand: !node.collapsed,
    richText: false,
  }

  if (node.rich?.note) data.note = node.rich.note
  if (node.rich?.link) {
    data.hyperlink = node.rich.link
    data.hyperlinkTitle = node.rich.link
  }
  if (node.rich?.imageUrl) {
    data.image = node.rich.imageUrl
    data.imageTitle = 'image'
    data.imageSize = { width: 120, height: 120, custom: true }
  }
  if (node.rich?.markers?.length) data.tag = [...node.rich.markers]
  if (node.rich?.icon) data.icon = [node.rich.icon]
  if (node.rich?.branchColor) {
    data.lineColor = node.rich.branchColor
  }

  return {
    data,
    children: node.children.map(toEngineTree),
  }
}

export function fromEngineTree(node: EngineNode): MindNode {
  const d = node.data ?? { text: '' }
  const rich: MindNode['rich'] = {}
  if (d.note) rich.note = String(d.note)
  if (d.hyperlink) rich.link = String(d.hyperlink)
  if (d.image) rich.imageUrl = String(d.image)
  if (Array.isArray(d.tag) && d.tag.length) {
    rich.markers = d.tag as NonNullable<MindNode['rich']>['markers']
  }
  if (typeof d.lineColor === 'string') rich.branchColor = d.lineColor

  return {
    id: d.uid || crypto.randomUUID(),
    topic: sanitizeTopic(String(d.text ?? '')),
    collapsed: d.expand === false,
    rich: Object.keys(rich).length ? rich : undefined,
    children: (node.children ?? []).map(fromEngineTree),
  }
}

export function documentToEngineData(doc: MindDocument): EngineNode {
  return toEngineTree(doc.root)
}

export function engineDataToRoot(data: EngineNode): MindNode {
  return fromEngineTree(data)
}

/** Count nodes for perf budgets. */
export function countNodes(node: MindNode): number {
  return 1 + node.children.reduce((sum, c) => sum + countNodes(c), 0)
}

/** Build a synthetic N-node tree for benchmarks. */
export function buildBenchmarkTree(n: number): MindNode {
  const root: MindNode = {
    id: 'root',
    topic: 'Root',
    children: [],
  }
  let remaining = n - 1
  const queue: MindNode[] = [root]
  let i = 0
  while (remaining > 0 && queue.length) {
    const parent = queue.shift()!
    const childCount = Math.min(remaining, 4)
    for (let c = 0; c < childCount; c++) {
      const child: MindNode = {
        id: `n-${i++}`,
        topic: `Node ${i}`,
        children: [],
      }
      parent.children.push(child)
      queue.push(child)
      remaining--
    }
  }
  return root
}
