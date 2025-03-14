import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import { CssBaseline } from '@mui/material'
import { theme } from './styles/theme'
import './App.css'
import React, { Suspense, lazy, useState, useEffect } from 'react'
import { CartProvider } from './context/CartContext'
import { AuthProvider, useAuth } from './context/AuthContext'
import AuthModal from './components/AuthModal'
import ScrollToTopOnMount from './components/ScrollToTopOnMount'

// Lazy load components
const Home = lazy(() => import('./components/Home'))
const Navbar = lazy(() => import('./components/Navbar'))
const Footer = lazy(() => import('./components/Footer'))
const Productos = lazy(() => import('./components/Productos'))
const Nosotros = lazy(() => import('./components/Nosotros'))
const Contacto = lazy(() => import('./components/Contacto'))
const Cart = lazy(() => import('./components/Cart'))
const Profile = lazy(() => import('./components/Profile'))
const ScrollToTop = lazy(() => import('./components/ScrollToTop'))

function ProtectedApp() {
  const { isAuthenticated } = useAuth()
  const [showAuth, setShowAuth] = useState(!isAuthenticated)

  useEffect(() => {
    setShowAuth(!isAuthenticated)
  }, [isAuthenticated])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <ErrorBoundary>
          <Router>
            <ScrollToTopOnMount />
            <div className='app'>
              <Suspense fallback={<div>Cargando...</div>}>
                <Navbar />
                {isAuthenticated ? (
                  <>
                    <Routes>
                      <Route
                        path='/'
                        element={
                          <Suspense fallback={<div>Cargando página...</div>}>
                            <Home />
                          </Suspense>
                        }
                      />
                      <Route
                        path='/productos'
                        element={
                          <Suspense fallback={<div>Cargando página...</div>}>
                            <Productos />
                          </Suspense>
                        }
                      />
                      <Route
                        path='/nosotros'
                        element={
                          <Suspense fallback={<div>Cargando página...</div>}>
                            <Nosotros />
                          </Suspense>
                        }
                      />
                      <Route
                        path='/contacto'
                        element={
                          <Suspense fallback={<div>Cargando página...</div>}>
                            <Contacto />
                          </Suspense>
                        }
                      />
                      <Route
                        path='/cart'
                        element={
                          <Suspense fallback={<div>Cargando...</div>}>
                            <Cart />
                          </Suspense>
                        }
                      />
                      <Route
                        path='/profile'
                        element={
                          <Suspense fallback={<div>Cargando...</div>}>
                            <Profile />
                          </Suspense>
                        }
                      />
                    </Routes>
                    <ScrollToTop />
                  </>
                ) : null}
                <Footer />
              </Suspense>
            </div>
          </Router>
          <AuthModal
            open={showAuth}
            onClose={() => isAuthenticated && setShowAuth(false)}
          />
        </ErrorBoundary>
      </CartProvider>
    </ThemeProvider>
  )
}

function App() {
  return (
    <AuthProvider>
      <ProtectedApp />
    </AuthProvider>
  )
}

// Agregar ErrorBoundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, errorMessage: '' }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error.message || 'Ocurrió un error en la aplicación',
    }
  }

  render() {
    if (this.state.hasError) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    return this.props.children
  }
}

export default App
