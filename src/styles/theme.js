import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1e3d59', // Azul marino profundo
      light: '#2c5282',
      dark: '#152a3b',
    },
    secondary: {
      main: '#ff6e40', // Naranja coral
      light: '#ff9e80',
      dark: '#c53d13',
    },
    accent: {
      blue: '#17b1d4',
      coral: '#ff6b6b',
      teal: '#48b4aa',
      gold: '#ffd700',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
      gradient: 'linear-gradient(135deg, #f6f9fc 0%, #ffffff 100%)',
    },
    text: {
      primary: '#2d3748',
      secondary: '#4a5568',
    },
  },
  shadows: [
    'none',
    '0 2px 4px rgba(0,0,0,0.05)',
    '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)', // Custom shadow for cards
  ],
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontFamily: 'Poppins',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Poppins',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Poppins',
      fontWeight: 600,
    },
    button: {
      fontFamily: 'Poppins',
      fontWeight: 500,
    },
    body1: {
      fontFamily: 'Poppins',
      fontWeight: 400,
    },
  },
})
