import { styled } from '@mui/material/styles'
import { Box, Paper } from '@mui/material'

export const ContactFormContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    '& .MuiGrid-item': {
      paddingTop: '8px',
      paddingBottom: '8px',
    },
  },
}))

export const MapContainer = styled(Box)(({ theme }) => ({
  height: '450px',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  border: '2px solid #f0f0f0',
  [theme.breakpoints.down('sm')]: {
    height: '300px',
    marginTop: '24px',
  },
}))

export const ContactInfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: '8px',
  backgroundColor: 'rgba(0, 56, 118, 0.05)',
  '& svg': {
    color: theme.palette.primary.main,
    fontSize: '24px',
  },
}))
