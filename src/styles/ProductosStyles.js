import { styled } from '@mui/material/styles'
import { Box, Card, Badge } from '@mui/material'

export const ProductHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  background: 'linear-gradient(135deg, #003876 0%, #0056b3 100%)',
  color: 'white',
  marginBottom: theme.spacing(6),
}))

export const DetailedProductCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  background: theme.palette.background.gradient,
  borderRadius: '16px',
  position: 'relative',
  border: '1px solid rgba(255,255,255,0.8)',

  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    background:
      'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.5))',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },

  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: theme.shadows[20],
    '&:before': {
      opacity: 1,
    },
    '& .MuiCardMedia-root': {
      transform: 'scale(1.1)',
    },
  },

  '& .MuiCardMedia-root': {
    height: 280,
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '50%',
      background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
      transition: 'opacity 0.3s ease',
    },
  },

  '& .MuiChip-root': {
    background: `linear-gradient(45deg, ${theme.palette.accent.blue}, ${theme.palette.accent.teal})`,
    color: 'white',
    fontWeight: 600,
    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
  },

  '& .MuiButton-contained': {
    background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
    borderRadius: '25px',
    padding: '8px 24px',
    fontWeight: 600,
    textTransform: 'none',
    boxShadow: '0 4px 15px rgba(255,110,64,0.3)',
    '&:hover': {
      background: `linear-gradient(45deg, ${theme.palette.secondary.dark}, ${theme.palette.secondary.main})`,
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(255,110,64,0.4)',
    },
  },

  '& .MuiTypography-h5': {
    color: theme.palette.text.primary,
    fontWeight: 600,
    fontSize: '1.25rem',
    marginBottom: theme.spacing(1),
  },

  '& .MuiTypography-body2': {
    color: theme.palette.text.secondary,
  },

  '& .MuiCardContent-root': {
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(255,255,255,0.5)',
  },
}))

export const CartBadge = styled(Badge)({
  '& .MuiBadge-badge': {
    right: -3,
    top: 3,
    padding: '0 4px',
  },
})
