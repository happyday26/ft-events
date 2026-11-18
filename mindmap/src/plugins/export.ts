import { toOpml, exportJsonFile, downloadText } from '../persistence/fileIO'
import type { ExportFormatPlugin } from './types'

export const exporters: ExportFormatPlugin[] = [
  {
    id: 'png',
    label: 'PNG',
    extensions: ['.png'],
    async export(_doc, engine) {
      await engine.exportNative('png')
    },
  },
  {
    id: 'svg',
    label: 'SVG',
    extensions: ['.svg'],
    async export(_doc, engine) {
      await engine.exportNative('svg')
    },
  },
  {
    id: 'pdf',
    label: 'PDF',
    extensions: ['.pdf'],
    async export(_doc, engine) {
      await engine.exportNative('pdf')
    },
  },
  {
    id: 'json',
    label: 'JSON (owned file)',
    extensions: ['.rootline.json', '.json'],
    async export(doc) {
      exportJsonFile(doc)
    },
  },
  {
    id: 'opml',
    label: 'OPML',
    extensions: ['.opml'],
    async export(doc) {
      downloadText(
        `${doc.meta.title || 'map'}.opml`,
        toOpml(doc),
        'text/xml',
      )
    },
  },
]
