import 'simple-mind-map/dist/simpleMindMap.esm.min.css'
import {
  disableBundledRichText,
  resolveMindMap,
} from './engine/resolveMindMap'

const MindMap = resolveMindMap()
disableBundledRichText(MindMap)
const el = document.createElement('div')
el.style.width = '100vw'
el.style.height = '100vh'
document.body.style.margin = '0'
document.body.appendChild(el)
console.log(
  'ctor',
  typeof MindMap,
  'usePlugin',
  typeof MindMap.usePlugin,
  'plugins',
  MindMap.pluginList?.map((p) => p.instanceName),
)
try {
  const mm = new MindMap({
    el,
    data: {
      data: { text: 'Smoke root' },
      children: [{ data: { text: 'Child' }, children: [] }],
    },
    layout: 'mindMap',
    theme: 'classic4',
  })
  console.log('mounted ok', !!mm.el)
  setTimeout(() => mm.view.fit(), 50)
  ;(window as unknown as { mm: unknown }).mm = mm
} catch (e) {
  console.error('mount failed', e)
  document.body.insertAdjacentHTML(
    'beforeend',
    `<pre style="color:red;padding:12px">${(e as Error).stack}</pre>`,
  )
}
