import { styled } from '@mui/material/styles'
import { Box, Card } from '@mui/material'

export const WaveContainer = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  overflow: 'hidden',
  lineHeight: 0,
  '& svg': {
    position: 'relative',
    display: 'block',
    width: '100%',
    height: '180px',
    background: 'transparent',
    marginBottom: -2,
  },
  '& path': {
    fill: '#003876', // Azul corporativo
    fillOpacity: '1',
  },
})

export const StyledHero = styled(Box)`
  background-image: ${(props) =>
    `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${props.backgroundimage})`};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(to top, rgba(248, 250, 252, 1), transparent);
  }
`

export const StyledContent = styled(Box)({
  position: 'relative',
  zIndex: 1,
  color: 'white',
  textAlign: 'left',
  maxWidth: '600px',
})

export const StatsSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  color: 'white',
  padding: theme.spacing(8, 0),
  marginTop: theme.spacing(8),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
  },
}))

export const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  background: theme.palette.background.gradient,
  borderRadius: '16px',
  border: '1px solid rgba(255,255,255,0.8)',
  position: 'relative',

  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    background:
      'linear-gradient(45deg, rgba(23,177,212,0.1), rgba(72,180,170,0.1))',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },

  '&:hover': {
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: theme.shadows[20],
    '&:before': {
      opacity: 1,
    },
    '& .MuiCardMedia-root': {
      transform: 'scale(1.1) rotate(2deg)',
    },
  },

  '& .MuiCardMedia-root': {
    height: 280,
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '50%',
      background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
    },
  },

  '& .MuiCardContent-root': {
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(255,255,255,0.5)',
    position: 'relative',
    zIndex: 1,
  },

  '& .MuiButton-contained': {
    background: `linear-gradient(45deg, ${theme.palette.accent.blue}, ${theme.palette.accent.teal})`,
    color: 'white',
    borderRadius: '25px',
    padding: '10px 30px',
    fontWeight: 600,
    textTransform: 'none',
    boxShadow: '0 4px 15px rgba(23,177,212,0.3)',
    '&:hover': {
      background: `linear-gradient(45deg, ${theme.palette.accent.teal}, ${theme.palette.accent.blue})`,
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(23,177,212,0.4)',
    },
  },
}))

export const WorkerSection = styled(Box)({
  padding: '64px 0',
  backgroundColor: '#F8F9FA',
})

export const CircularProductSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0),
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    backgroundColor: '#0056b3', // Usando color directo en lugar de theme
    opacity: 0.1,
    top: '-100px',
    right: '-100px',
    zIndex: 0,
  },
}))
