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
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import PersonIcon from '@mui/icons-material/Person'

// Datos de ejemplo
const mockOrders = [
  {
    id: '#ORD001',
    date: '2024-03-10',
    total: 15000,
    status: 'Entregado',
    items: [
      { name: 'Camarón Premium', quantity: 2, price: 5000 },
      { name: 'Salmón Fresco', quantity: 1, price: 5000 },
    ],
  },
  {
    id: '#ORD002',
    date: '2024-03-15',
    total: 22000,
    status: 'En proceso',
    items: [
      { name: 'Langostinos', quantity: 3, price: 6000 },
      { name: 'Pulpo', quantity: 1, price: 4000 },
    ],
  },
  // ...más pedidos
]

const mockStats = {
  week: 37000,
  month: 89000,
  year: 450000,
}

function Profile() {
  const [activeTab, setActiveTab] = useState(0)
  const { user } = useAuth()

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

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container maxWidth="lg" sx={{ py: 6, flex: 1 }}>
        <Grid container spacing={4}>
          {/* Perfil Header */}
          <Grid item xs={12}>
            <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main' }}>
                <PersonIcon fontSize="large" />
              </Avatar>
              <Box>
                <Typography variant="h4">{user?.nombre} {user?.apellido}</Typography>
                <Typography color="text.secondary">{user?.email}</Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Estadísticas */}
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Gasto Semanal
                  </Typography>
                  <Typography variant="h4" color="primary">
                    ${mockStats.week.toLocaleString()}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Gasto Mensual
                  </Typography>
                  <Typography variant="h4" color="primary">
                    ${mockStats.month.toLocaleString()}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Gasto Anual
                  </Typography>
                  <Typography variant="h4" color="primary">
                    ${mockStats.year.toLocaleString()}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          {/* Pedidos */}
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)} sx={{ mb: 3 }}>
                <Tab label="Pedidos Recientes" />
                <Tab label="En Proceso" />
                <Tab label="Historial" />
              </Tabs>

              {mockOrders.map((order, index) => (
                <Box key={order.id} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Box>
                      <Typography variant="h6">
                        Pedido {order.id}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Fecha: {new Date(order.date).toLocaleDateString()}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Chip
                        label={order.status}
                        color={getStatusColor(order.status)}
                        sx={{ mb: 1 }}
                      />
                      <Typography variant="h6" color="primary">
                        ${order.total.toLocaleString()}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    {order.items.map((item, idx) => (
                      <Typography key={idx} variant="body2" color="text.secondary">
                        {item.quantity}x {item.name} - ${item.price.toLocaleString()}
                      </Typography>
                    ))}
                  </Box>

                  {order.status === 'En proceso' && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Estado del envío
                      </Typography>
                      <LinearProgress variant="determinate" value={60} />
                    </Box>
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
