import {
  Container,
  Typography,
  Grid,
  CardMedia,
  CardContent,
  Button,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Chip,
  TextField,
  InputAdornment,
} from '@mui/material'
import { ProductHeader, DetailedProductCard } from '../styles/ProductosStyles'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

const productos = [
  {
    id: 1,
    codigo: 'CAM-001',
    nombre: 'Camarón Rojo Premium',
    imagen: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47',
    descripcion: 'Camarones rojos seleccionados de primera calidad.',
    precio: 2500,
    precioCaja: 22000,
    unidadesPorCaja: 10,
    origen: 'Mar Argentino',
    categoria: 'Premium',
    peso: '1kg',
  },
  {
    id: 2,
    codigo: 'SAL-001',
    nombre: 'Filete de Salmón Fresco',
    imagen: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369',
    descripcion: 'Filetes de salmón fresco cortados a mano.',
    precio: 3200,
    precioCaja: 30000,
    unidadesPorCaja: 10,
    origen: 'Chile',
    categoria: 'Premium',
    peso: '1kg',
  },
  {
    id: 3,
    codigo: 'MER-001',
    nombre: 'Merluza Premium',
    imagen: 'https://images.unsplash.com/photo-1511421585906-57a6e6dc3a2f',
    descripcion: 'Merluza fresca del día, ideal para frituras.',
    precio: 1800,
    precioCaja: 16000,
    unidadesPorCaja: 10,
    origen: 'Mar Argentino',
    categoria: 'Clásico',
    peso: '1kg',
  },
  {
    id: 4,
    codigo: 'PUL-001',
    nombre: 'Pulpo Español',
    imagen: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47',
    descripcion: 'Pulpo de primera calidad, perfecto para parrilla.',
    precio: 4500,
    precioCaja: 40000,
    unidadesPorCaja: 10,
    origen: 'España',
    categoria: 'Premium',
    peso: '1kg',
  },
  {
    id: 5,
    codigo: 'CAL-001',
    nombre: 'Anillas de Calamar',
    imagen: 'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg',
    descripcion: 'Anillas de calamar frescas para frituras.',
    precio: 2200,
    precioCaja: 20000,
    unidadesPorCaja: 10,
    origen: 'Mar Argentino',
    categoria: 'Clásico',
    peso: '1kg',
  },
  {
    id: 6,
    codigo: 'LAN-001',
    nombre: 'Langostinos Grandes',
    imagen:
      'https://images.pexels.com/photos/3296279/pexels-photo-3296279.jpeg',
    descripcion: 'Langostinos grandes, perfectos para parrilla.',
    precio: 3800,
    precioCaja: 35000,
    unidadesPorCaja: 10,
    origen: 'Mar Argentino',
    categoria: 'Premium',
    peso: '1kg',
  },
  {
    id: 7,
    codigo: 'ATU-001',
    nombre: 'Atún Rojo',
    imagen:
      'https://images.pexels.com/photos/2871757/pexels-photo-2871757.jpeg',
    descripcion: 'Atún rojo de primera calidad para sashimi.',
    precio: 5500,
    precioCaja: 50000,
    unidadesPorCaja: 10,
    origen: 'Japón',
    categoria: 'Premium',
    peso: '1kg',
  },
  {
    id: 8,
    codigo: 'SAR-001',
    nombre: 'Sardinas Frescas',
    imagen:
      'https://images.pexels.com/photos/4161713/pexels-photo-4161713.jpeg',
    descripcion: 'Sardinas frescas del día.',
    precio: 1500,
    precioCaja: 13000,
    unidadesPorCaja: 10,
    origen: 'Mar Argentino',
    categoria: 'Clásico',
    peso: '1kg',
  },
  {
    id: 9,
    codigo: 'COR-001',
    nombre: 'Corvina Negra',
    imagen: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a',
    descripcion: 'Corvina negra fresca, ideal para horno.',
    precio: 2800,
    precioCaja: 25000,
    unidadesPorCaja: 10,
    origen: 'Mar Argentino',
    categoria: 'Premium',
    peso: '1kg',
  },
  {
    id: 10,
    codigo: 'DOR-001',
    nombre: 'Dorado Premium',
    imagen:
      'https://images.pexels.com/photos/3296275/pexels-photo-3296275.jpeg',
    descripcion: 'Dorado fresco de río, perfecto para parrilla.',
    precio: 3200,
    precioCaja: 29000,
    unidadesPorCaja: 10,
    origen: 'Río Paraná',
    categoria: 'Premium',
    peso: '1kg',
  },
]

function Productos() {
  const [selecciones, setSelecciones] = useState({})
  const [busqueda, setBusqueda] = useState('')
  const { addToCart } = useCart()

  // Filtrar productos basado en la búsqueda
  const productosFiltrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      producto.codigo.toLowerCase().includes(busqueda.toLowerCase()),
  )

  const handleTipoCompra = (event, productoId) => {
    setSelecciones({
      ...selecciones,
      [productoId]: event.target.value,
    })
  }

  const getPrecioMostrado = (producto) => {
    const seleccion = selecciones[producto.id]
    return seleccion === 'caja' ? producto.precioCaja : producto.precio
  }

  const handleAddToCart = (producto) => {
    const tipo = selecciones[producto.id] || 'unidad'
    addToCart(producto, 1, tipo)
  }

  return (
    <Box>
      <ProductHeader>
        <Container maxWidth='lg'>
          <Typography variant='h2' align='center' gutterBottom fontWeight={700}>
            Nuestros Productos
          </Typography>
          <Typography variant='h5' align='center' sx={{ opacity: 0.9 }}>
            Descubre nuestra selección de mariscos y pescados de primera calidad
          </Typography>
        </Container>
      </ProductHeader>

      <Container maxWidth='lg' sx={{ py: 4 }}>
        {/* Buscador */}
        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            variant='outlined'
            placeholder='Buscar por nombre o código del producto...'
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Grid container spacing={4}>
          {productosFiltrados.map((producto) => (
            <Grid item xs={12} sm={6} md={4} key={producto.id}>
              <DetailedProductCard>
                <CardMedia
                  component='img'
                  image={producto.imagen}
                  alt={producto.nombre}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 2,
                    }}
                  >
                    <Box>
                      <Typography variant='h5' gutterBottom>
                        {producto.nombre}
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        Código: {producto.codigo}
                      </Typography>
                    </Box>
                    <Chip
                      label={producto.categoria}
                      color='primary'
                      size='small'
                    />
                  </Box>
                  <Typography color='text.secondary' paragraph>
                    {producto.descripcion}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant='body2' color='text.secondary'>
                      Origen: {producto.origen}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Peso: {producto.peso}
                    </Typography>
                  </Box>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Tipo de Compra</InputLabel>
                    <Select
                      value={selecciones[producto.id] || 'unidad'}
                      onChange={(e) => handleTipoCompra(e, producto.id)}
                      label='Tipo de Compra'
                    >
                      <MenuItem value='unidad'>Por Unidad</MenuItem>
                      <MenuItem value='caja'>
                        Por Caja ({producto.unidadesPorCaja} unidades)
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant='h6' color='primary.main'>
                      ${getPrecioMostrado(producto).toLocaleString()}
                    </Typography>
                    <Button
                      variant='contained'
                      color='primary'
                      startIcon={<AddShoppingCartIcon />}
                      sx={{ borderRadius: '20px' }}
                      onClick={() => handleAddToCart(producto)}
                    >
                      Agregar
                    </Button>
                  </Box>
                </CardContent>
              </DetailedProductCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Productos
