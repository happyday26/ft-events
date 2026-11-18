import type { AiProvider } from '../types'

let active: AiProvider | null = null

export function registerAiProvider(provider: AiProvider): void {
  active = provider
}

export function getAiProvider(): AiProvider | null {
  return active
}
