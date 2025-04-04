import { createRoot } from 'react-dom/client'
import App from './App'

import './index.css'

const containerEl = document.getElementById('root')
const root = createRoot(containerEl!)
root.render(<App />)
