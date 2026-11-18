import { createEmptyDocument, type MindDocument, type MindNode } from '../core/schema'

function n(topic: string, children: MindNode[] = []): MindNode {
  return { id: crypto.randomUUID(), topic, children }
}

export interface TemplateDef {
  id: string
  label: string
  description: string
  build: () => MindDocument
}

export const templates: TemplateDef[] = [
  {
    id: 'brainstorming',
    label: 'Brainstorming',
    description: 'Diverge freely, then cluster.',
    build: () => {
      const doc = createEmptyDocument('Brainstorm')
      doc.root = n('Brainstorm', [
        n('Wild ideas'),
        n('Constraints'),
        n('Promising threads'),
        n('Park for later'),
      ])
      return doc
    },
  },
  {
    id: 'project-planning',
    label: 'Project planning',
    description: 'Scope, milestones, owners.',
    build: () => {
      const doc = createEmptyDocument('Project plan')
      doc.root = n('Project', [
        n('Goal'),
        n('Milestones', [n('M1'), n('M2'), n('M3')]),
        n('Workstreams', [n('Design'), n('Build'), n('QA')]),
        n('Risks'),
        n('Done looks like'),
      ])
      doc.meta.layout = 'organizationStructure'
      return doc
    },
  },
  {
    id: 'workshop',
    label: 'Workshop',
    description: 'Agenda, activities, takeaways.',
    build: () => {
      const doc = createEmptyDocument('Workshop')
      doc.root = n('Workshop', [
        n('Opening'),
        n('Activities', [n('Warm-up'), n('Core exercise'), n('Share-out')]),
        n('Decisions'),
        n('Takeaways'),
        n('Next meeting'),
      ])
      doc.meta.layout = 'timeline'
      return doc
    },
  },
]
