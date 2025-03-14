import { styled } from '@mui/material/styles'
import { Box, Card, Badge } from '@mui/material'

export const ProductHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  background: 'linear-gradient(135deg, #003876 0%, #0056b3 100%)',
  color: 'white',
  marginBottom: theme.spacing(6),
}))

export const DetailedProductCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15)',
  },
  '& .MuiCardMedia-root': {
    height: 220,
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '30%',
      background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
    },
  },
})

export const CartBadge = styled(Badge)({
  '& .MuiBadge-badge': {
    right: -3,
    top: 3,
    padding: '0 4px',
  },
})
