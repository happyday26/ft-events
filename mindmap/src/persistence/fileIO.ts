import { migrateDocument } from '../core/migrations'
import type { MindDocument } from '../core/schema'

export function exportJsonFile(doc: MindDocument, filename?: string): void {
  const blob = new Blob([JSON.stringify(doc, null, 2)], {
    type: 'application/json',
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename || `${doc.meta.title.replace(/\s+/g, '-').toLowerCase() || 'map'}.rootline.json`
  a.click()
  URL.revokeObjectURL(url)
}

export async function importJsonFile(file: File): Promise<MindDocument> {
  const text = await file.text()
  const raw = JSON.parse(text) as unknown
  return migrateDocument(raw)
}

export function downloadText(filename: string, content: string, mime: string): void {
  const blob = new Blob([content], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

/** Best-effort OPML export (plugin-style). */
export function toOpml(doc: MindDocument): string {
  const escape = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

  const walk = (node: MindDocument['root'], depth: number): string => {
    const pad = '  '.repeat(depth)
    const kids = node.children.map((c) => walk(c, depth + 1)).join('')
    if (!kids) {
      return `${pad}<outline text="${escape(node.topic)}" />\n`
    }
    return `${pad}<outline text="${escape(node.topic)}">\n${kids}${pad}</outline>\n`
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<opml version="2.0">
  <head><title>${escape(doc.meta.title)}</title></head>
  <body>
${walk(doc.root, 2)}  </body>
</opml>
`
}
