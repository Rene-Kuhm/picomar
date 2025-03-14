import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  Tab,
  Tabs,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useAuth } from '../context/AuthContext'

const MOCK_USER = {
  email: 'example@prueba.com',
  password: '12345678',
}

function AuthModal({ open, onClose }) {
  const [tab, setTab] = useState(0)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nombre: '',
    apellido: '',
  })
  const [error, setError] = useState('')
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (tab === 0) {
      // Login
      if (
        formData.email === MOCK_USER.email &&
        formData.password === MOCK_USER.password
      ) {
        login({
          email: formData.email,
          nombre: 'Usuario',
          apellido: 'Prueba',
        })
        onClose()
      } else {
        setError('Email o contraseña incorrectos')
      }
    } else {
      // Register
      // Simular registro exitoso
      login({
        email: formData.email,
        nombre: formData.nombre,
        apellido: formData.apellido,
      })
      onClose()
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Dialog
      open={open}
      maxWidth='sm'
      fullWidth
      onClose={(e, reason) => {
        if (reason !== 'backdropClick') onClose()
      }}
    >
      <DialogTitle>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography variant='h6'>
            {tab === 0 ? 'Iniciar Sesión' : 'Registrarse'}
          </Typography>
          <IconButton onClick={onClose} disabled>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
          <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)}>
            <Tab label='Iniciar Sesión' />
            <Tab label='Registrarse' />
          </Tabs>
        </Box>

        <Box component='form' onSubmit={handleSubmit}>
          {error && (
            <Typography color='error' sx={{ mb: 2, textAlign: 'center' }}>
              {error}
            </Typography>
          )}
          {tab === 1 && (
            <>
              <TextField
                fullWidth
                margin='normal'
                label='Nombre'
                name='nombre'
                value={formData.nombre}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                margin='normal'
                label='Apellido'
                name='apellido'
                value={formData.apellido}
                onChange={handleChange}
                required
              />
            </>
          )}
          <TextField
            fullWidth
            margin='normal'
            label='Email'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin='normal'
            label='Contraseña'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            {tab === 0 ? 'Iniciar Sesión' : 'Registrarse'}
          </Button>

          {tab === 0 && (
            <Typography variant='body2' color='text.secondary' align='center'>
              Usuario de prueba: example@prueba.com
              <br />
              Contraseña: 12345678
            </Typography>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default AuthModal
