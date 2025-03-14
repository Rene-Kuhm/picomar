import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#003876', // Azul marino corporativo
      light: '#0056b3',
      dark: '#002654',
    },
    secondary: {
      main: '#E31E24', // Rojo corporativo
      light: '#ff1744',
      dark: '#b71c1c',
    },
    background: {
      default: '#FFFFFF', // Blanco
      paper: '#F8FAFC',
    },
  },
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
