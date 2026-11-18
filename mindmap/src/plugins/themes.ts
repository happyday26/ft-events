import type { ThemePlugin } from './types'

export const themes: ThemePlugin[] = [
  {
    id: 'rootline-ink',
    label: 'Ink Grove',
    engineTheme: 'classic4',
    preview: { bg: '#0c1412', accent: '#b8e649', node: '#1a2e28' },
  },
  {
    id: 'slate-focus',
    label: 'Slate Focus',
    engineTheme: 'classic',
    preview: { bg: '#12151a', accent: '#6ec6ff', node: '#1e2430' },
  },
  {
    id: 'paper-day',
    label: 'Daylight',
    engineTheme: 'classic2',
    preview: { bg: '#e8eef2', accent: '#0d6e5f', node: '#ffffff' },
  },
]
