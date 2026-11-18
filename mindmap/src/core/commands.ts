/**
 * Command layer — all mutations go through here so undo/sync can retrofit later.
 * Aligns with simple-mind-map `execCommand` names where possible.
 */

export type CommandName =
  | 'INSERT_NODE'
  | 'INSERT_CHILD_NODE'
  | 'REMOVE_NODE'
  | 'BACK'
  | 'FORWARD'
  | 'SET_NODE_EXPAND'
  | 'EXPAND_ALL'
  | 'UNEXPAND_ALL'
  | 'RESET_LAYOUT'
  | 'SET_NODE_TEXT'
  | 'PASTE_NESTED_LIST'
  | 'APPLY_TEMPLATE'
  | 'SET_LAYOUT'
  | 'SET_THEME'
  | 'AI_REPLACE_TREE'

export interface AppCommand {
  id: string
  name: CommandName
  args: unknown[]
  at: string
}

export type CommandExecutor = (name: CommandName, ...args: unknown[]) => void

export class CommandBus {
  private listeners = new Set<(cmd: AppCommand) => void>()
  private log: AppCommand[] = []
  private executeUnderlying: CommandExecutor

  constructor(executeUnderlying: CommandExecutor) {
    this.executeUnderlying = executeUnderlying
  }

  exec(name: CommandName, ...args: unknown[]): AppCommand {
    const cmd: AppCommand = {
      id: crypto.randomUUID(),
      name,
      args,
      at: new Date().toISOString(),
    }
    this.log.push(cmd)
    if (this.log.length > 500) this.log.shift()
    this.executeUnderlying(name, ...args)
    for (const l of this.listeners) l(cmd)
    return cmd
  }

  onCommand(listener: (cmd: AppCommand) => void): () => void {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  /** Replay log for future sync / audit. */
  getLog(): readonly AppCommand[] {
    return this.log
  }

  clearLog(): void {
    this.log = []
  }
}
