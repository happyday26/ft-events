import { useEffect, useRef } from 'react'
import type { MindMapEngine } from '../engine/MindMapEngine'

interface CanvasHostProps {
  engine: MindMapEngine
}

export function CanvasHost({ engine }: CanvasHostProps) {
  const shellRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const shell = shellRef.current
    if (!shell) return

    let cancelled = false
    let mounted = false
    let tries = 0
    let fitTimer: number | undefined

    const mountWhenReady = () => {
      if (cancelled) return
      const { clientWidth, clientHeight } = shell
      if (clientWidth < 32 || clientHeight < 32) {
        tries += 1
        if (tries < 120) {
          fitTimer = window.setTimeout(mountWhenReady, 16)
        }
        return
      }

      shell.replaceChildren()
      const host = document.createElement('div')
      host.id = 'mindMapContainer'
      host.className = 'rl-canvas'
      host.style.width = '100%'
      host.style.height = '100%'
      shell.appendChild(host)

      try {
        engine.mount(host)
        mounted = true
      } catch (err) {
        console.error('[Rootline] mind map mount failed', err)
        return
      }

      // Wait for simple-mind-map asyncRun layout ticks before resize/fit.
      fitTimer = window.setTimeout(() => {
        if (cancelled || !mounted) return
        try {
          engine.resize()
          engine.fit()
        } catch (err) {
          console.error('[Rootline] fit failed', err)
        }
      }, 50)
    }

    mountWhenReady()

    const onResize = () => {
      if (mounted && !cancelled) engine.resize()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelled = true
      if (fitTimer) window.clearTimeout(fitTimer)
      window.removeEventListener('resize', onResize)
      if (mounted) {
        try {
          engine.destroy()
        } catch {
          /* ignore */
        }
      }
      shell.replaceChildren()
    }
  }, [engine])

  return <div ref={shellRef} className="rl-canvas-shell" />
}
