import type { MarkerPlugin } from './types'

export const markers: MarkerPlugin[] = [
  { id: 'priority-high', label: 'High', color: '#e85d4c' },
  { id: 'priority-medium', label: 'Medium', color: '#e0a106' },
  { id: 'priority-low', label: 'Low', color: '#5b8def' },
  { id: 'done', label: 'Done', color: '#3d9a6a' },
  { id: 'idea', label: 'Idea', color: '#b8e649' },
  { id: 'question', label: 'Question', color: '#9b7bff' },
  { id: 'risk', label: 'Risk', color: '#c44b2b' },
]
