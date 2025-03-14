import { useState } from 'react'
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  MenuItem,
  Snackbar,
} from '@mui/material'
import {
  ContactFormContainer,
  MapContainer,
  ContactInfoItem,
} from '../styles/ContactStyles'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    tipoConsulta: '',
    mensaje: '',
  })
  const [openSnackbar, setOpenSnackbar] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    setOpenSnackbar(true)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8fafc' }}>
      <Container maxWidth='lg'>
        <Typography
          variant='h2'
          align='center'
          gutterBottom
          color='primary'
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Contáctanos
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <ContactFormContainer elevation={0}>
              <Box component='form' onSubmit={handleSubmit} noValidate>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label='Nombre completo'
                      name='nombre'
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label='Empresa'
                      name='empresa'
                      value={formData.empresa}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label='Email'
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label='Teléfono'
                      name='telefono'
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      select
                      required
                      fullWidth
                      label='Tipo de consulta'
                      name='tipoConsulta'
                      value={formData.tipoConsulta}
                      onChange={handleChange}
                    >
                      <MenuItem value='productos'>
                        Información de productos
                      </MenuItem>
                      <MenuItem value='ventas'>Ventas mayoristas</MenuItem>
                      <MenuItem value='distribucion'>Distribución</MenuItem>
                      <MenuItem value='otros'>Otros</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      rows={4}
                      label='Mensaje'
                      name='mensaje'
                      value={formData.mensaje}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  type='submit'
                  variant='contained'
                  size='large'
                  fullWidth
                  sx={{ mt: 4 }}
                >
                  Enviar mensaje
                </Button>
              </Box>
            </ContactFormContainer>

            <Box sx={{ mt: 4 }}>
              <ContactInfoItem>
                <LocationOnIcon />
                <Typography>
                  Calle 17 N° 1045, General Pico, La Pampa
                </Typography>
              </ContactInfoItem>
              <ContactInfoItem>
                <PhoneIcon />
                <Typography>+54 2302 123456</Typography>
              </ContactInfoItem>
              <ContactInfoItem>
                <EmailIcon />
                <Typography>info@picomar.com</Typography>
              </ContactInfoItem>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <MapContainer>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51949.688255543015!2d-63.78674254179687!3d-35.656244899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c37d405b40dd69%3A0x53386c5c0a758ba2!2sGeneral%20Pico%2C%20La%20Pampa!5e0!3m2!1ses!2sar!4v1709071533657!5m2!1ses!2sar'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </MapContainer>
          </Grid>
        </Grid>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          message='Mensaje enviado con éxito'
        />
      </Container>
    </Box>
  )
}

export default Contacto
