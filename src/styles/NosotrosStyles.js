import { styled } from '@mui/material/styles'
import { Box, Paper, Typography } from '@mui/material'

export const StorySection = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(12, 0),
  background: 'linear-gradient(135deg, #003876 0%, #0056b3 100%)',
  color: 'white',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      'radial-gradient(circle at 20% 150%, rgba(255,255,255,0.1) 0%, transparent 50%)',
  },
}))

export const ValueCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  textAlign: 'center',
  borderRadius: '16px',
  transition: 'transform 0.3s ease-in-out',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
  },
}))

export const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0),
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    width: '2px',
    height: 'calc(100% - 150px)', // Ajustado para no interferir con el título
    background: theme.palette.primary.main,
    transform: 'translateX(-50%)',
    top: '150px', // Empezar después del título
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      left: '20px',
    },
  },
}))

export const TimelineTitle = styled(Typography)({
  position: 'relative',
  zIndex: 2,
  backgroundColor: '#f8fafc',
  display: 'inline-block',
  padding: '0 20px',
})

export const TimelineContent = styled(Box)({
  marginTop: '40px', // Espacio después del título
  position: 'relative',
  zIndex: 1,
})

export const TimelineItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '20px 40px',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '50%',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    transform: 'translateY(-50%)',
    boxShadow: '0 0 0 4px rgba(0, 56, 118, 0.2)',
    zIndex: 2,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '10px',
    top: '50%',
    width: '40px',
    height: '2px',
    backgroundColor: theme.palette.primary.main,
    transform: 'translateY(-50%)',
    zIndex: 1,
  },
}))
