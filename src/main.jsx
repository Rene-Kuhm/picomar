import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const mountApp = () => {
  try {
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
  } catch (error) {
    console.error('Error mounting app:', error)
  }
}

// Ensure DOM is fully loaded before mounting
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp)
} else {
  mountApp()
}

// Global error handler
window.addEventListener('unhandledrejection', (event) => {
  // Ignore Chrome extension related errors
  if (event.reason?.message?.includes('Receiving end does not exist')) {
    event.preventDefault()
    return
  }
  console.error('Unhandled promise rejection:', event.reason)
})
