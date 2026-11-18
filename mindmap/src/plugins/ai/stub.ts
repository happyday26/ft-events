import type { MindNode } from '../../core/schema'
import type { AiGenerateRequest, AiProvider } from '../types'

function node(topic: string, children: MindNode[] = []): MindNode {
  return { id: crypto.randomUUID(), topic, children }
}

/** Deterministic stub — no API key required for MVP. */
export const stubAiProvider: AiProvider = {
  id: 'stub',
  label: 'Stub (offline)',
  async generate(req: AiGenerateRequest): Promise<MindNode> {
    const prompt = req.prompt.trim() || 'Untitled'
    switch (req.kind) {
      case 'expand-branch':
        return node(req.contextNode?.topic || prompt, [
          node(`Angle: ${prompt}`),
          node('Evidence'),
          node('Next step'),
          node('Open question'),
        ])
      case 'summarize-to-map':
        return node(`Summary: ${prompt.slice(0, 48)}`, [
          node('Key points', [
            node('Point A'),
            node('Point B'),
            node('Point C'),
          ]),
          node('Implications'),
          node('Follow-ups'),
        ])
      case 'from-url':
        return node(`From URL`, [
          node(prompt || 'https://example.com'),
          node('Main claims'),
          node('Quotes to capture'),
          node('Related reading'),
        ])
      case 'from-pdf':
        return node('From PDF (stub)', [
          node(prompt || 'Uploaded document'),
          node('Sections'),
          node('Definitions'),
          node('Action items'),
        ])
      case 'from-prompt':
      default:
        return node(prompt, [
          node('Context'),
          node('Ideas', [node('Idea 1'), node('Idea 2'), node('Idea 3')]),
          node('Plan', [node('Now'), node('Next'), node('Later')]),
          node('Risks'),
        ])
    }
  },
}
