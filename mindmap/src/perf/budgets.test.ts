import { describe, expect, it } from 'vitest'
import {
  buildBenchmarkTree,
  countNodes,
  documentToEngineData,
  fromEngineTree,
  toEngineTree,
} from '../core/adapter'
import { migrateDocument } from '../core/migrations'
import { parseNestedList, subtreeFromList } from '../core/pasteList'
import { createEmptyDocument, SCHEMA_VERSION } from '../core/schema'

/** P0 performance budgets (CI-enforced). */
const KEYSTROKE_BUDGET_MS = 50
const THOUSAND_NODE_BUDGET_MS = 1000

describe('performance budgets', () => {
  it(`keystroke-path work stays under ${KEYSTROKE_BUDGET_MS}ms`, () => {
    const samples: number[] = []
    for (let i = 0; i < 40; i++) {
      const t0 = performance.now()
      // Simulate per-keystroke canonical work: parse tiny edit + migrate + adapt
      const doc = createEmptyDocument(`Idea ${i}`)
      doc.root.topic = `Idea ${i}`.repeat(2).slice(0, 24)
      const engine = documentToEngineData(doc)
      const roundTrip = fromEngineTree(toEngineTree(fromEngineTree(engine)))
      expect(roundTrip.topic.length).toBeGreaterThan(0)
      samples.push(performance.now() - t0)
    }
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length
    const max = Math.max(...samples)
    expect(avg).toBeLessThan(KEYSTROKE_BUDGET_MS)
    expect(max).toBeLessThan(KEYSTROKE_BUDGET_MS * 2)
  })

  it(`1,000-node map adapt + migrate under ${THOUSAND_NODE_BUDGET_MS}ms`, () => {
    const tree = buildBenchmarkTree(1000)
    expect(countNodes(tree)).toBe(1000)

    const t0 = performance.now()
    const engine = toEngineTree(tree)
    const back = fromEngineTree(engine)
    const wrapped = migrateDocument({
      schemaVersion: 0,
      topic: back.topic,
      children: back.children,
    })
    const elapsed = performance.now() - t0

    expect(wrapped.schemaVersion).toBe(SCHEMA_VERSION)
    expect(countNodes(wrapped.root)).toBeGreaterThanOrEqual(1000)
    expect(elapsed).toBeLessThan(THOUSAND_NODE_BUDGET_MS)
  })
})

describe('paste nested list → subtree (P0 acceptance)', () => {
  it('Given nested list When parsed Then matching subtree', () => {
    const text = `- Root
  - Child A
    - Grand A1
  - Child B
- Root 2`

    // Given a clipboard nested list
    // When the user pastes (parser runs)
    const nodes = parseNestedList(text)
    const subtree = subtreeFromList(text)

    // Then a matching subtree is created
    expect(nodes).toHaveLength(2)
    expect(nodes[0].topic).toBe('Root')
    expect(nodes[0].children).toHaveLength(2)
    expect(nodes[0].children[0].children[0].topic).toBe('Grand A1')
    expect(subtree?.children.length || subtree?.topic).toBeTruthy()
  })
})

describe('schema migrations', () => {
  it('migrates bare topic trees and engine shapes', () => {
    const a = migrateDocument({
      topic: 'Old',
      children: [{ topic: 'Kid', children: [] }],
    })
    expect(a.schemaVersion).toBe(SCHEMA_VERSION)
    expect(a.root.topic).toBe('Old')

    const b = migrateDocument({
      data: { text: 'Engine', uid: 'x' },
      children: [],
    })
    expect(b.root.topic).toBe('Engine')
    expect(b.root.id).toBe('x')
  })
})
