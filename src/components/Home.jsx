import {
  Box,
  Container,
  Typography,
  Grid,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material'
import {
  WaveContainer,
  StyledHero,
  StyledContent,
  StatsSection,
  ProductCard,
  WorkerSection,
  CircularProductSection,
} from '../styles/HomeStyles'
import heroImage from '../assets/picomar-local.jpg'
import product1Image from '../assets/471733034_1106349987957276_2985861113172286221_n.jpg'
import camaronImage from '../assets/475528171_1130084345583840_4356290926904918779_n.jpg'
import pescadoImage from '../assets/480553591_1146398917285716_3847631999150794348_n.jpg'
import pulpoImage from '../assets/480709507_1146399007285707_3018088896961304424_n.jpg'
import calamarImage from '../assets/480807899_1144446504147624_875217194000653829_n.jpg'
import workerImage from '../assets/480807899_1144446504147624_875217194000653829_n.jpg'
import salmonImage from '../assets/481175936_1148146223777652_8805090957314308641_n.jpg'
import { WaveText } from '../styles/TextEffects'

function Home() {
  const products = [
    { name: 'Camarón', image: camaronImage },
    { name: 'Pescado', image: pescadoImage },
    { name: 'Pulpo', image: pulpoImage },
    { name: 'Calamar', image: calamarImage },
  ]

  return (
    <Box>
      <StyledHero backgroundimage={heroImage}>
        <Container maxWidth='lg'>
          <StyledContent>
            <WaveText
              component='h1'
              sx={{
                mb: 3,
                fontSize: { xs: '3rem', md: '4.5rem' },
                '@media (max-width: 600px)': {
                  fontSize: '2.5rem',
                },
              }}
            >
              Picomar
            </WaveText>
            <Typography
              variant='h2'
              sx={{
                mb: 4,
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 400,
                letterSpacing: '0.05em',
              }}
            >
              Tradición y Calidad en Productos del Mar
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant='contained'
                color='secondary'
                size='large'
                sx={{
                  py: 2.5,
                  px: 6,
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  borderRadius: '12px',
                  background: 'linear-gradient(90deg, #F59E0B, #D97706)',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #FBBF24, #F59E0B)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                Ver Productos
              </Button>
              <Button
                variant='outlined'
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                Conócenos
              </Button>
            </Box>
          </StyledContent>
        </Container>
        <WaveContainer>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
            preserveAspectRatio='none' // Añadido para mejor estiramiento
          >
            <path d='M0,160L34.3,149.3C68.6,139,137,117,206,144C274.3,171,343,245,411,277.3C480,309,549,299,617,282.7C685.7,267,754,245,823,218.7C891.4,192,960,160,1029,176C1097.1,192,1166,256,1234,282.7C1302.9,309,1371,299,1406,293.3L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z' />
          </svg>
        </WaveContainer>
      </StyledHero>

      <Container maxWidth='lg' sx={{ my: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ProductCard>
              <CardMedia
                component='img'
                image={product1Image}
                alt='Seafood product'
                sx={{
                  objectFit: 'cover',
                  overflow: 'hidden',
                }}
              />
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography variant='h5' gutterBottom>
                  Calidad y Frescura
                </Typography>
                <Typography>
                  Nuestros productos son seleccionados cuidadosamente para
                  garantizar la mejor calidad.
                </Typography>
              </CardContent>
            </ProductCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <ProductCard>
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center',
                  p: 4,
                }}
              >
                <Typography variant='h5' gutterBottom>
                  ¿Quiere Vender Nuestros Productos?
                </Typography>
                <Typography sx={{ mb: 3 }}>
                  Únase a nuestra red de distribuidores y crezca con nosotros.
                </Typography>
                <Button variant='contained' color='primary' size='large'>
                  Contáctenos
                </Button>
              </CardContent>
            </ProductCard>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth='lg' sx={{ my: 8 }}>
        <Typography variant='h2' textAlign='center' gutterBottom>
          Nuestros Productos
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.name}>
              <ProductCard>
                <Box sx={{ overflow: 'hidden' }}>
                  <CardMedia
                    component='img'
                    height='250'
                    image={product.image}
                    alt={product.name}
                    sx={{
                      objectFit: 'cover',
                      transform: 'scale(1.1)',
                    }}
                  />
                </Box>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography
                    variant='h6'
                    sx={{
                      mb: 1,
                      fontWeight: 600,
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Button
                    variant='contained'
                    color='primary'
                    sx={{
                      mt: 2,
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    Ver Detalles
                  </Button>
                </CardContent>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <WorkerSection>
        <Container maxWidth='lg'>
          <Grid container spacing={4} alignItems='center'>
            <Grid item xs={12} md={6}>
              <Box
                component='img'
                src={workerImage}
                alt='Seafood Worker'
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='h3' gutterBottom>
                Expertos en Mariscos
              </Typography>
              <Typography variant='body1' paragraph>
                Nuestro equipo de expertos selecciona cuidadosamente cada
                producto para garantizar la mejor calidad y frescura.
              </Typography>
              <Typography variant='body1' paragraph>
                Con más de 50 años de experiencia en la industria, conocemos los
                más altos estándares de calidad y seguridad alimentaria.
              </Typography>
              <Button
                variant='contained'
                color='primary'
                size='large'
                sx={{ mt: 2 }}
              >
                Conoce Nuestro Proceso
              </Button>
            </Grid>
          </Grid>
        </Container>
      </WorkerSection>

      <CircularProductSection>
        <Container maxWidth='lg'>
          <Grid container spacing={4} alignItems='center'>
            <Grid item xs={12} md={6}>
              <Typography variant='h3' gutterBottom>
                Salmón Premium
              </Typography>
              <Typography variant='body1' paragraph>
                Nuestro salmón premium es reconocido por su calidad excepcional
                y sabor incomparable.
              </Typography>
              <Typography variant='body1' paragraph>
                Criado en las aguas más puras y procesado bajo los más altos
                estándares de calidad.
              </Typography>
              <Button
                variant='contained'
                color='secondary'
                size='large'
                sx={{ mt: 2 }}
              >
                Ver Producto
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component='img'
                src={salmonImage}
                alt='Salmón Premium'
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '50%',
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </CircularProductSection>
    </Box>
  )
}

export default Home
