import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Button,
  useTheme,
  Menu,
  MenuItem,
  useMediaQuery,
  Typography,
  Badge,
} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { useCart } from '../context/CartContext'

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px', // Aumentado el espacio entre logo y texto
  '& img': {
    height: '60px', // Aumentado el tamaño
    width: 'auto',
    transition: 'transform 0.3s ease',
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))', // Añadido sombra suave
  },
  '& h1': {
    fontSize: '2.2rem', // Aumentado tamaño de fuente
    fontWeight: 800,
    fontFamily: 'Poppins',
    margin: 0,
    background: 'linear-gradient(45deg, #003876 30%, #0056b3 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
})

function Navbar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [anchorEl, setAnchorEl] = useState(null)
  const { cart } = useCart()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <AppBar
      position='sticky'
      sx={{
        backgroundColor: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        py: 1, // Añadido padding vertical
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <LogoContainer
            component={Link}
            to='/'
            sx={{ textDecoration: 'none' }}
          >
            <img
              src='/images/logo-picomar-Photoroom.png'
              alt='Picomar'
              style={{
                height: '60px',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
            <Typography variant='h1'>PICOMAR</Typography>
          </LogoContainer>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {isMobile ? (
              <>
                <IconButton
                  component={Link}
                  to='/cart'
                  color='primary'
                  sx={{ mr: 2 }}
                >
                  <Badge badgeContent={cartItemCount} color='secondary'>
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  color='primary'
                  aria-label='menu'
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} component={Link} to='/'>
                    Inicio
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={Link}
                    to='/productos'
                  >
                    Productos
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={Link}
                    to='/nosotros'
                  >
                    Nosotros
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    component={Link}
                    to='/contacto'
                  >
                    Contacto
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button component={Link} to='/' color='primary'>
                  Inicio
                </Button>
                <Button component={Link} to='/productos' color='primary'>
                  Productos
                </Button>
                <Button component={Link} to='/nosotros' color='primary'>
                  Nosotros
                </Button>
                <Button component={Link} to='/contacto' color='primary'>
                  Contacto
                </Button>
                <IconButton
                  component={Link}
                  to='/cart'
                  color='primary'
                  sx={{ ml: 2 }}
                >
                  <Badge badgeContent={cartItemCount} color='secondary'>
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </>
            )}
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              component={Link}
              to='/profile'
              sx={{ color: theme.palette.primary.main }}
            >
              <AccountCircleIcon />
            </IconButton>
            <IconButton
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
              sx={{ color: theme.palette.primary.main }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
              sx={{ color: theme.palette.primary.main }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href='https://wa.me/5492302123456'
              target='_blank'
              rel='noopener noreferrer'
              sx={{ color: theme.palette.primary.main }}
            >
              <WhatsAppIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
