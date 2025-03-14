import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Stepper,
  Step,
  StepLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Dialog,
  Stack,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import PaymentsIcon from '@mui/icons-material/Payments'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

const paymentMethods = [
  {
    id: 'transferencia',
    name: 'Transferencia Bancaria',
    description: 'Transferencia directa a nuestra cuenta bancaria',
    icon: <AccountBalanceIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    details: 'Banco Nación - CBU: 0110599940059918671018',
  },
  {
    id: 'mercadopago',
    name: 'MercadoPago',
    description: 'Pago con tarjeta o dinero en cuenta',
    icon: <CreditCardIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    details: 'Aceptamos todas las tarjetas - Hasta 12 cuotas',
  },
  {
    id: 'efectivo',
    name: 'Efectivo',
    description: 'Pago en efectivo al momento de la entrega',
    icon: <PaymentsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    details: 'Solo en entregas dentro de General Pico',
  },
]

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart()
  const [activeStep, setActiveStep] = useState(0)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [orderComplete, setOrderComplete] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    email: '',
  })
  const [formErrors, setFormErrors] = useState({})

  const steps = [
    'Revisión del Carrito',
    'Datos de Envío',
    'Método de Pago',
    'Confirmación',
  ]

  const validateForm = () => {
    const errors = {}
    const fields = {
      nombre: 'Nombre',
      apellido: 'Apellido',
      direccion: 'Dirección',
      telefono: 'Teléfono',
      email: 'Email',
    }

    Object.keys(fields).forEach((field) => {
      if (!formData[field].trim()) {
        errors[field] = `${fields[field]} es requerido`
      }
    })

    // Validación específica para email
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email no válido'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleClose = () => {
    setOrderComplete(false)
    // Redireccionar al inicio después de cerrar el diálogo
    window.location.href = '/'
  }

  const handleNext = () => {
    if (activeStep === 1) {
      // Validar formulario antes de continuar
      if (!validateForm()) return
    }

    if (activeStep === steps.length - 1) {
      // Simular procesamiento de orden
      setTimeout(() => {
        setOrderComplete(true)
        // Cerrar automáticamente después de 2 segundos y redireccionar
        setTimeout(handleClose, 2000)
        clearCart()
      }, 2000)
    } else {
      setActiveStep(activeStep + 1)
    }
  }

  const handleBack = () => setActiveStep(activeStep - 1)

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Limpiar error cuando el usuario empieza a escribir
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const canAdvance = () => {
    switch (activeStep) {
      case 0:
        return cart.length > 0
      case 1:
        return Object.values(formData).every((value) => value.trim() !== '')
      case 2:
        return paymentMethod !== ''
      default:
        return true
    }
  }

  const calculateTotal = () => {
    return cart.reduce((acc, item) => {
      const precio = item.tipo === 'caja' ? item.precioCaja : item.precio
      return acc + precio * item.quantity
    }, 0)
  }

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={2}>
            {cart.map((item) => (
              <Grid item xs={12} key={`${item.id}-${item.tipo}`}>
                <Card>
                  <CardContent
                    sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                  >
                    <Box
                      component='img'
                      src={item.imagen}
                      alt={item.nombre}
                      sx={{ width: 100, height: 100, objectFit: 'cover' }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant='h6'>{item.nombre}</Typography>
                      <Typography color='text.secondary'>
                        Cantidad: {item.quantity} {item.tipo}(s)
                      </Typography>
                      <Typography>
                        $
                        {(
                          (item.tipo === 'caja'
                            ? item.precioCaja
                            : item.precio) * item.quantity
                        ).toLocaleString()}
                      </Typography>
                    </Box>
                    <IconButton
                      onClick={() => removeFromCart(item.id, item.tipo)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )

      case 1:
        return renderShippingForm()

      case 2:
        return (
          <Box sx={{ py: 2 }}>
            <RadioGroup
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              {paymentMethods.map((method) => (
                <FormControlLabel
                  key={method.id}
                  value={method.id}
                  control={<Radio />}
                  label={
                    <Card sx={{ width: '100%', mb: 2, p: 2 }}>
                      <Stack direction='row' spacing={2} alignItems='center'>
                        {method.icon}
                        <Box>
                          <Typography variant='subtitle1' fontWeight='bold'>
                            {method.name}
                          </Typography>
                          <Typography variant='body2' color='text.secondary'>
                            {method.description}
                          </Typography>
                          <Typography
                            variant='body2'
                            color='primary'
                            sx={{ mt: 1 }}
                          >
                            {method.details}
                          </Typography>
                        </Box>
                      </Stack>
                    </Card>
                  }
                  sx={{
                    margin: 0,
                    width: '100%',
                    '& .MuiFormControlLabel-label': {
                      width: '100%',
                    },
                  }}
                />
              ))}
            </RadioGroup>
          </Box>
        )

      case 3:
        return (
          <Box>
            <Typography variant='h6' gutterBottom>
              Resumen del Pedido
            </Typography>
            <Grid container spacing={2}>
              {cart.map((item) => (
                <Grid item xs={12} key={`${item.id}-${item.tipo}`}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      py: 1,
                    }}
                  >
                    <Typography>
                      {item.nombre} ({item.quantity} {item.tipo}s)
                    </Typography>
                    <Typography>
                      $
                      {(
                        (item.tipo === 'caja' ? item.precioCaja : item.precio) *
                        item.quantity
                      ).toLocaleString()}
                    </Typography>
                  </Box>
                </Grid>
              ))}
              <Grid item xs={12}>
                <Box
                  sx={{
                    borderTop: '2px solid #eee',
                    pt: 2,
                    mt: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant='h6'>Total a pagar:</Typography>
                  <Typography variant='h6' color='primary.main'>
                    ${calculateTotal().toLocaleString()}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='subtitle1' sx={{ mt: 2 }}>
                  Método de pago:{' '}
                  {paymentMethods.find((m) => m.id === paymentMethod)?.name}
                </Typography>
                <Typography variant='subtitle1'>
                  Dirección de envío: {formData.direccion}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        )

      default:
        return null
    }
  }

  const renderShippingForm = () => (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label='Nombre'
          name='nombre'
          value={formData.nombre}
          onChange={handleFormChange}
          error={!!formErrors.nombre}
          helperText={formErrors.nombre}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label='Apellido'
          name='apellido'
          value={formData.apellido}
          onChange={handleFormChange}
          error={!!formErrors.apellido}
          helperText={formErrors.apellido}
          required
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label='Dirección'
          name='direccion'
          value={formData.direccion}
          onChange={handleFormChange}
          error={!!formErrors.direccion}
          helperText={formErrors.direccion}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label='Teléfono'
          name='telefono'
          value={formData.telefono}
          onChange={handleFormChange}
          error={!!formErrors.telefono}
          helperText={formErrors.telefono}
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label='Email'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleFormChange}
          error={!!formErrors.email}
          helperText={formErrors.email}
          required
        />
      </Grid>
    </Grid>
  )

  return (
    <div className='cart-container'>
      <Container maxWidth='md' sx={{ py: 4, flex: 1 }}>
        <Typography variant='h4' gutterBottom align='center'>
          Carrito de Compras
        </Typography>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {renderStepContent(activeStep)}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 4,
            borderTop: '2px solid #eee',
            pt: 3,
          }}
        >
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Atrás
          </Button>
          <Box>
            <Typography variant='h6' color='text.secondary' gutterBottom>
              Total a Pagar
            </Typography>
            <Typography variant='h4' color='primary.main' align='right'>
              ${calculateTotal().toLocaleString()}
            </Typography>
          </Box>
          <Button
            variant='contained'
            onClick={handleNext}
            disabled={!canAdvance()}
            size='large'
          >
            {activeStep === steps.length - 1 ? 'Confirmar Pedido' : 'Siguiente'}
          </Button>
        </Box>

        <Dialog open={orderComplete} onClose={handleClose}>
          <Box sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant='h6' gutterBottom>
              ¡Pedido Confirmado!
            </Typography>
            <Typography>
              Gracias por tu compra. Recibirás un email con los detalles.
            </Typography>
          </Box>
        </Dialog>
      </Container>
    </div>
  )
}

export default Cart
