import { openDB, type IDBPDatabase } from 'idb'
import { migrateDocument } from '../core/migrations'
import { touchDocument, type MindDocument } from '../core/schema'

const DB_NAME = 'rootline-mindmap'
const STORE = 'documents'
const ACTIVE_KEY = 'active'

let dbPromise: Promise<IDBPDatabase> | null = null

function getDb() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE)) {
          db.createObjectStore(STORE)
        }
      },
    })
  }
  return dbPromise
}

export async function loadActiveDocument(): Promise<MindDocument | null> {
  const db = await getDb()
  const raw = await db.get(STORE, ACTIVE_KEY)
  if (!raw) return null
  return migrateDocument(raw)
}

export async function saveActiveDocument(doc: MindDocument): Promise<void> {
  const db = await getDb()
  const next = touchDocument(doc)
  await db.put(STORE, next, ACTIVE_KEY)
}

/** Debounced autosave — invisible to the user. */
export function createAutosave(delayMs = 400) {
  let timer: ReturnType<typeof setTimeout> | null = null
  let pending: MindDocument | null = null
  let writing = false

  const flush = async () => {
    if (!pending || writing) return
    writing = true
    const doc = pending
    pending = null
    try {
      await saveActiveDocument(doc)
    } finally {
      writing = false
      if (pending) void flush()
    }
  }

  return {
    schedule(doc: MindDocument) {
      pending = doc
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null
        void flush()
      }, delayMs)
    },
    async flushNow() {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      await flush()
    },
  }
}
