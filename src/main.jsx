import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const mountApp = () => {
  const container = document.getElementById('root')
  if (!container) {
    throw new Error('Container #root not found')
  }

  const root = createRoot(container)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

// Usar requestAnimationFrame para asegurar que el DOM está listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(mountApp)
  })
} else {
  requestAnimationFrame(mountApp)
}

window.addEventListener('error', (event) => {
  console.error('Global error:', event.error)
})
