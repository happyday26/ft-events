import { createRoot } from 'react-dom/client'
import 'simple-mind-map/dist/simpleMindMap.esm.min.css'
import './index.css'
import App from './App'

// Avoid StrictMode double-mount: simple-mind-map owns imperative SVG DOM.
createRoot(document.getElementById('root')!).render(<App />)
