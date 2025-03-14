import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import ParallaxSection from './ParallaxSection'

gsap.registerPlugin(ScrollTrigger)

function Home() {
  const productsRef = useRef(null)
  const leftCardsRef = useRef([])
  const rightCardsRef = useRef([])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })

    // Animación para las cards de la izquierda
    leftCardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            end: 'top center',
            scrub: 1,
          },
        },
      )
    })

    // Animación para las cards de la derecha
    rightCardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            end: 'top center',
            scrub: 1,
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const products = [
    { name: 'Camarón', image: camaronImage },
    { name: 'Pescado', image: pescadoImage },
    { name: 'Pulpo', image: pulpoImage },
    { name: 'Calamar', image: calamarImage },
  ]

  return (
    <Box>
      <ParallaxSection bgImage={heroImage}>
        <Container maxWidth='lg'>
          <StyledContent>
            <WaveText>Picomar</WaveText>
            <Typography
              variant='h2'
              sx={{
                mb: 4,
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 400,
                letterSpacing: '0.05em',
              }}
            >
              Tradición y Calidad en Productos del Mar . Desde 1961 uniendo la pampa y el mar
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                component={Link}
                to='/productos'
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
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
                component={Link}
                to='/nosotros'
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
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              className='shape-fill'
            ></path>
            <path
              d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-58,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
              className='shape-fill'
              style={{ opacity: 0.5 }}
            ></path>
          </svg>
        </WaveContainer>
      </ParallaxSection>

      <Container maxWidth='lg' sx={{ my: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box ref={(el) => (leftCardsRef.current[0] = el)}>
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
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box ref={(el) => (rightCardsRef.current[0] = el)}>
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
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth='lg' sx={{ my: 8 }}>
        <Typography
          variant='h2'
          textAlign='center'
          gutterBottom
          data-aos='fade-up'
        >
          Nuestros Productos
        </Typography>
        <Box ref={productsRef}>
          <Grid container spacing={3}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={3} key={product.name}>
                <Box
                  ref={(el) => {
                    if (index % 2 === 0) {
                      leftCardsRef.current[index + 1] = el
                    } else {
                      rightCardsRef.current[index + 1] = el
                    }
                  }}
                >
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
                        component={Link}
                        to='/productos'
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
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <WorkerSection>
        <Container maxWidth='lg'>
          <Grid container spacing={4} alignItems='center'>
            <Grid item xs={12} md={6} data-aos='fade-right'>
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
            <Grid item xs={12} md={6} data-aos='fade-left'>
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
                component={Link}
                to='/nosotros'
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
            <Grid item xs={12} md={6} data-aos='fade-up-right'>
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
                component={Link}
                to='/productos'
                variant='contained'
                color='secondary'
                size='large'
                sx={{ mt: 2 }}
              >
                Ver Producto
              </Button>
            </Grid>
            <Grid item xs={12} md={6} data-aos='fade-up-left'>
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
