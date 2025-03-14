import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0f172a', // Dark blue
      light: '#1e293b',
      dark: '#020617',
    },
    secondary: {
      main: '#06b6d4', // Cyan
      light: '#22d3ee',
      dark: '#0891b2',
    },
    accent: {
      teal: '#0d9488',
      orange: '#f97316',
      purple: '#a855f7',
      rose: '#f43f5e',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
      dark: '#0f172a',
      gradient: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
      glassLight: 'rgba(255, 255, 255, 0.7)',
      glassDark: 'rgba(15, 23, 42, 0.7)',
    },
    text: {
      primary: '#2d3748',
      secondary: '#4a5568',
    },
  },
  shadows: [
    'none',
    '0 2px 4px rgba(0,0,0,0.05)',
    '0 4px 6px rgba(0,0,0,0.07)',
    '0 6px 8px rgba(0,0,0,0.09)',
    '0 8px 10px rgba(0,0,0,0.11)',
    '0 10px 12px rgba(0,0,0,0.13)',
    '0 12px 14px rgba(0,0,0,0.15)',
    '0 14px 16px rgba(0,0,0,0.17)',
    '0 16px 18px rgba(0,0,0,0.19)',
    '0 18px 20px rgba(0,0,0,0.21)',
    '0 20px 22px rgba(0,0,0,0.23)',
    '0 22px 24px rgba(0,0,0,0.25)',
    '0 24px 26px rgba(0,0,0,0.27)',
    '0 26px 28px rgba(0,0,0,0.29)',
    '0 28px 30px rgba(0,0,0,0.31)',
    '0 30px 32px rgba(0,0,0,0.33)',
    '0 32px 34px rgba(0,0,0,0.35)',
    '0 34px 36px rgba(0,0,0,0.37)',
    '0 36px 38px rgba(0,0,0,0.39)',
    '0 38px 40px rgba(0,0,0,0.41)',
    '0 40px 42px rgba(0,0,0,0.43)',
    '0 42px 44px rgba(0,0,0,0.45)',
    '0 44px 46px rgba(0,0,0,0.47)',
    '0 46px 48px rgba(0,0,0,0.49)',
    '0 48px 50px rgba(0,0,0,0.51)',
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          fontWeight: 600,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        },
      },
    },
  },
})
