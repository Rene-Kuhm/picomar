import { useEffect, useRef } from 'react'
import { Box } from '@mui/material'

function ParallaxSection({ bgImage, children, strength = 200 }) {
  const boxRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!boxRef.current) return
      const scrolled = window.scrollY
      const rate = scrolled * 0.5 * (strength / 100)
      boxRef.current.style.backgroundPositionY = `${rate}px`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [strength])

  return (
    <Box
      ref={boxRef}
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  )
}

export default ParallaxSection
