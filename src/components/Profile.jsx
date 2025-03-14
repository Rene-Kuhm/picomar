import { useState } from 'react'
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Tabs,
  Tab,
  Chip,
  Divider,
  LinearProgress,
} from '@mui/material'
import { useAuth } from '../context/AuthContext'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import PersonIcon from '@mui/icons-material/Person'

// Datos más realistas para Picomar
const mockOrders = [
  {
    id: '#2024001',
    date: '2024-03-15',
    total: 25800,
    status: 'En proceso',
    items: [
      { name: 'Langostinos L1', quantity: 2, price: 8500 },
      { name: 'Salmón Premium', quantity: 1, price: 8800 },
    ],
  },
  {
    id: '#2024002',
    date: '2024-03-14',
    total: 32500,
    status: 'Entregado',
    items: [
      { name: 'Calamar Limpio', quantity: 3, price: 4500 },
      { name: 'Pulpo Español', quantity: 2, price: 9500 },
    ],
  },
  {
    id: '#2024003',
    date: '2024-03-10',
    total: 28900,
    status: 'Entregado',
    items: [
      { name: 'Merluza Fresca', quantity: 5, price: 3200 },
      { name: 'Camarón Pelado', quantity: 2, price: 5850 },
    ],
  },
]

const mockStats = {
  week: 87200,
  month: 245000,
  year: 1250000,
}

function Profile() {
  const [activeTab, setActiveTab] = useState(0)
  const { user } = useAuth()

  const handleTabChange = (event, newValue) => {
    if (newValue !== undefined) {
      setActiveTab(newValue)
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Entregado':
        return 'success'
      case 'En proceso':
        return 'warning'
      case 'Pendiente':
        return 'info'
      default:
        return 'default'
    }
  }

  const DeliveryProgress = ({ progress }) => (
    <Box sx={{ position: 'relative', mt: 2 }}>
      <Typography variant='body2' color='text.secondary' gutterBottom>
        Estado del envío
      </Typography>
      <Box
        sx={{
          position: 'relative',
          height: '40px',
          backgroundColor: '#f0f0f0',
          borderRadius: '20px',
          overflow: 'hidden',
        }}
      >
        <LinearProgress
          variant='determinate'
          value={progress}
          sx={{
            height: '100%',
            backgroundColor: 'rgba(0, 56, 118, 0.1)',
            '& .MuiLinearProgress-bar': {
              backgroundColor: 'primary.main',
              backgroundImage:
                'linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)',
              backgroundSize: '40px 40px',
              animation: 'progress-animation 1s linear infinite',
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: `calc(${progress}% - 20px)`,
            transform: 'translateY(-50%)',
            transition: 'all 0.3s ease',
            zIndex: 2,
          }}
        >
          <LocalShippingIcon
            sx={{
              color: 'primary.main',
              fontSize: '28px',
              transform: 'scaleX(1)', // El carro mira hacia la derecha
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 1,
          px: 1,
        }}
      >
        <Typography variant='caption'>Pedido realizado</Typography>
        <Typography variant='caption'>En camino</Typography>
        <Typography variant='caption'>Entregado</Typography>
      </Box>
    </Box>
  )

  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Container maxWidth='lg' sx={{ py: 6, flex: 1 }}>
        <Grid container spacing={4}>
          {/* Perfil Header */}
          <Grid item xs={12}>
            <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main' }}>
                <PersonIcon fontSize='large' />
              </Avatar>
              <Box>
                <Typography variant='h4'>
                  {user?.nombre} {user?.apellido}
                </Typography>
                <Typography color='text.secondary'>{user?.email}</Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Estadísticas */}
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant='subtitle2' color='text.secondary'>
                    Gasto Semanal
                  </Typography>
                  <Typography variant='h4' color='primary'>
                    ${mockStats.week.toLocaleString()}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant='subtitle2' color='text.secondary'>
                    Gasto Mensual
                  </Typography>
                  <Typography variant='h4' color='primary'>
                    ${mockStats.month.toLocaleString()}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant='subtitle2' color='text.secondary'>
                    Gasto Anual
                  </Typography>
                  <Typography variant='h4' color='primary'>
                    ${mockStats.year.toLocaleString()}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          {/* Pedidos */}
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                sx={{ mb: 3 }}
              >
                <Tab label='Pedidos Recientes' />
                <Tab label='En Proceso' />
                <Tab label='Historial' />
              </Tabs>

              {mockOrders.map((order, index) => (
                <Box key={order.id} sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 2,
                    }}
                  >
                    <Box>
                      <Typography variant='h6'>Pedido {order.id}</Typography>
                      <Typography variant='body2' color='text.secondary'>
                        Fecha: {new Date(order.date).toLocaleDateString()}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Chip
                        label={order.status}
                        color={getStatusColor(order.status)}
                        sx={{ mb: 1 }}
                      />
                      <Typography variant='h6' color='primary'>
                        ${order.total.toLocaleString()}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    {order.items.map((item, idx) => (
                      <Typography
                        key={idx}
                        variant='body2'
                        color='text.secondary'
                      >
                        {item.quantity}x {item.name} - $
                        {item.price.toLocaleString()}
                      </Typography>
                    ))}
                  </Box>

                  {order.status === 'En proceso' && (
                    <DeliveryProgress progress={60} />
                  )}

                  {index < mockOrders.length - 1 && <Divider sx={{ mt: 2 }} />}
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Profile
