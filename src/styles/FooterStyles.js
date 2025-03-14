import { styled } from '@mui/material/styles'
import { Box, Link } from '@mui/material'

export const FooterSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: 'white',
  position: 'relative',
  padding: theme.spacing(8, 0, 4),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
  },
}))

export const FooterGrid = styled(Box)({
  marginTop: 4,
  paddingTop: 4,
  borderTop: '1px solid rgba(255,255,255,0.1)',
  textAlign: 'center',
})

export const FooterLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  '&:hover': {
    color: '#E31E24',
    transform: 'translateX(5px)',
  },
})

export const Schedule = styled(Box)({
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '12px',
  padding: '20px',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
})

export const SocialIcons = styled(Box)({
  marginTop: 2,
  display: 'flex',
  gap: 2,
})

export const ContactInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
})
