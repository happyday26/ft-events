import type { MindNode } from './schema'

/**
 * Parse a nested outline (markdown-ish / indented list) into a subtree.
 *
 * Acceptance (P0):
 *   Given a clipboard nested list
 *   When the user pastes onto a node
 *   Then a matching subtree is created under that node
 */
export function parseNestedList(text: string): MindNode[] {
  const lines = text
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((l) => l.replace(/\t/g, '  '))
    .filter((l) => l.trim().length > 0)

  if (!lines.length) return []

  type Frame = { indent: number; node: MindNode }
  const roots: MindNode[] = []
  const stack: Frame[] = []

  for (const line of lines) {
    const match = line.match(/^(\s*)([-*+]|\d+[.)])?\s*(.*)$/)
    if (!match) continue
    const indent = match[1].length
    const topic = match[3].trim()
    if (!topic) continue

    const node: MindNode = {
      id: crypto.randomUUID(),
      topic,
      children: [],
    }

    while (stack.length && stack[stack.length - 1].indent >= indent) {
      stack.pop()
    }

    if (!stack.length) {
      roots.push(node)
    } else {
      stack[stack.length - 1].node.children.push(node)
    }
    stack.push({ indent, node })
  }

  return roots
}

export function subtreeFromList(text: string): MindNode | null {
  const children = parseNestedList(text)
  if (!children.length) return null
  if (children.length === 1) return children[0]
  return {
    id: crypto.randomUUID(),
    topic: 'Pasted list',
    children,
  }
}
