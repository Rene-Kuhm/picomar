import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTopOnMount() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Usar 'instant' en lugar de 'smooth' para evitar animaciones indeseadas
    })
  }, [pathname])

  return null
}

export default ScrollToTopOnMount
