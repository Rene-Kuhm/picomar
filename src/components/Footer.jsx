import { Container, Grid, Typography, IconButton, Box } from '@mui/material'
import {
  FooterSection,
  FooterGrid,
  FooterLink,
  Schedule,
  SocialIcons,
  ContactInfo,
} from '../styles/FooterStyles'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

function Footer() {
  const scheduleData = [
    { day: 'Lunes a Viernes', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sábados', hours: '9:00 AM - 2:00 PM' },
    { day: 'Domingos', hours: 'Cerrado' },
  ]

  return (
    <FooterSection>
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant='h6' gutterBottom fontWeight='bold'>
              Picomar
            </Typography>
            <Typography variant='body2' sx={{ mb: 2, opacity: 0.8 }}>
              Empresa líder en la distribución de productos del mar,
              comprometida con la calidad y el servicio al cliente.
            </Typography>
            <SocialIcons>
              <IconButton
                color='inherit'
                href='https://www.facebook.com/picomar'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color='inherit'
                href='https://www.instagram.com/picomar'
                target='_blank'
                rel='noopener noreferrer'
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color='inherit'
                href='https://wa.me/5492302123456'
                target='_blank'
                rel='noopener noreferrer'
              >
                <WhatsAppIcon />
              </IconButton>
            </SocialIcons>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant='h6' gutterBottom fontWeight='bold'>
              Horario de Atención
            </Typography>
            <Schedule>
              {scheduleData.map(({ day, hours }) => (
                <Box
                  key={day}
                  sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <AccessTimeIcon sx={{ fontSize: 20, opacity: 0.8 }} />
                  <Box>
                    <Typography variant='body2' fontWeight='bold'>
                      {day}
                    </Typography>
                    <Typography variant='body2' sx={{ opacity: 0.8 }}>
                      {hours}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Schedule>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant='h6' gutterBottom fontWeight='bold'>
              Contacto
            </Typography>
            <ContactInfo>
              <FooterLink href='https://maps.google.com' target='_blank'>
                <LocationOnIcon /> Av. Principal 123, Ciudad
              </FooterLink>
              <FooterLink href='tel:+123456789'>
                <PhoneIcon /> (123) 456-7890
              </FooterLink>
              <FooterLink href='mailto:info@picomar.com'>
                <EmailIcon /> info@picomar.com
              </FooterLink>
            </ContactInfo>
          </Grid>
        </Grid>

        <FooterGrid>
          <Typography variant='body2' sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Picomar. Todos los derechos reservados.
          </Typography>
        </FooterGrid>
      </Container>
    </FooterSection>
  )
}

export default Footer
