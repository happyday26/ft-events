import { themes } from './themes'
import { markers } from './markers'
import { exporters } from './export'
import { stubAiProvider } from './ai/stub'
import { registerAiProvider } from './ai/provider'
import type { LayoutOption, PluginRegistrySnapshot } from './types'

export const layouts: LayoutOption[] = [
  { id: 'mindMap', label: 'Mind map', engineLayout: 'mindMap' },
  { id: 'logicalStructure', label: 'Logic', engineLayout: 'logicalStructure' },
  {
    id: 'organizationStructure',
    label: 'Org chart',
    engineLayout: 'organizationStructure',
  },
  {
    id: 'catalogOrganization',
    label: 'Catalog',
    engineLayout: 'catalogOrganization',
  },
  { id: 'timeline', label: 'Timeline', engineLayout: 'timeline' },
  { id: 'fishbone', label: 'Fishbone', engineLayout: 'fishbone' },
  {
    id: 'matrix',
    label: 'Matrix',
    engineLayout: 'catalogOrganization',
    deferred: true,
  },
]

registerAiProvider(stubAiProvider)

export function getPluginRegistry(): PluginRegistrySnapshot {
  return {
    themes,
    markers,
    exporters,
    aiProviders: [stubAiProvider],
    layouts,
  }
}
