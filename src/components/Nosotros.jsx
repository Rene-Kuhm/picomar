import { Container, Typography, Grid, Box } from '@mui/material'
import {
  StorySection,
  ValueCard,
  TimelineContainer,
  TimelineItem,
  TimelineTitle,
  TimelineContent,
} from '../styles/NosotrosStyles'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PeopleIcon from '@mui/icons-material/People'
import PublicIcon from '@mui/icons-material/Public'

function Nosotros() {
  const valores = [
    {
      icon: <CheckCircleIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      titulo: 'Calidad Premium',
      descripcion:
        'Seleccionamos los mejores productos del mar para garantizar la máxima calidad.',
    },
    {
      icon: <ShoppingBasketIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      titulo: 'Distribución Eficiente',
      descripcion: 'Red logística que garantiza la frescura en toda la región.',
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      titulo: 'Equipo Experto',
      descripcion:
        'Personal altamente capacitado con años de experiencia en el sector.',
    },
    {
      icon: <PublicIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
      titulo: 'Compromiso Sostenible',
      descripcion: 'Prácticas responsables que protegen nuestros océanos.',
    },
  ]

  const timeline = [
    {
      year: '1961',
      title: 'El Comienzo',
      description:
        'Don Roberto Martínez funda Picomar en General Pico, La Pampa, con un pequeño puesto de venta de pescado fresco.',
    },
    {
      year: '1970',
      title: 'Primera Expansión',
      description:
        'Apertura del primer local comercial propio y adquisición del primer camión refrigerado.',
    },
    {
      year: '1985',
      title: 'Consolidación Regional',
      description:
        'Expansión de la distribución a toda la provincia de La Pampa. Incorporación de nueva línea de productos.',
    },
    {
      year: '1998',
      title: 'Innovación en Refrigeración',
      description:
        'Implementación de moderno sistema de refrigeración y ampliación de la flota de distribución.',
    },
    {
      year: '2005',
      title: 'Centro de Distribución',
      description:
        'Inauguración del centro de distribución principal con cámaras frigoríficas de última generación.',
    },
    {
      year: '2015',
      title: 'Certificación de Calidad',
      description:
        'Obtención de certificaciones internacionales de calidad y seguridad alimentaria.',
    },
    {
      year: '2020',
      title: 'Transformación Digital',
      description:
        'Implementación de sistema de pedidos online y modernización de la logística.',
    },
    {
      year: '2025',
      title: 'Visión de Futuro',
      description:
        'Proyecto de expansión nacional y desarrollo de nuevas líneas de productos sustentables.',
    },
  ]

  return (
    <Box>
      <StorySection>
        <Container maxWidth='lg'>
          <Grid container spacing={6} alignItems='center'>
            <Grid item xs={12} md={6}>
              <Typography variant='h2' gutterBottom fontWeight={700}>
                Nuestra Historia
              </Typography>
              <Typography paragraph>
                Desde 1961, Picomar ha sido sinónimo de excelencia en la
                distribución de productos del mar. Todo comenzó con un pequeño
                puesto en el mercado local de General Pico, La Pampa, donde Don
                Roberto Martínez compartía su pasión por los mariscos frescos.
              </Typography>
              <Typography paragraph>
                Hoy, más de 50 años después, esa misma pasión sigue viva en cada
                uno de nuestros productos. Nos hemos convertido en líderes del
                mercado, manteniendo siempre los valores familiares que nos
                caracterizan.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component='img'
                src='/founder-image.jpg'
                alt='Fundador'
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </StorySection>

      <Box sx={{ py: 8, backgroundColor: '#f8fafc' }}>
        <Container maxWidth='lg'>
          <Typography
            variant='h3'
            textAlign='center'
            gutterBottom
            color='primary'
            sx={{ mb: 6 }}
          >
            Nuestros Valores
          </Typography>
          <Grid container spacing={4}>
            {valores.map((valor, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ValueCard elevation={0}>
                  <Box sx={{ mb: 2 }}>{valor.icon}</Box>
                  <Typography variant='h5' gutterBottom>
                    {valor.titulo}
                  </Typography>
                  <Typography color='text.secondary'>
                    {valor.descripcion}
                  </Typography>
                </ValueCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <TimelineContainer>
        <Container maxWidth='lg'>
          <Box sx={{ textAlign: 'center' }}>
            <TimelineTitle variant='h3' gutterBottom color='primary'>
              Nuestra Trayectoria
            </TimelineTitle>
          </Box>

          <TimelineContent>
            {timeline.map((item, index) => (
              <TimelineItem
                key={item.year}
                sx={{
                  ml: index % 2 === 0 ? 0 : 'auto',
                  width: { xs: '100%', md: '50%' },
                  textAlign: index % 2 === 0 ? 'left' : 'right',
                }}
              >
                <Typography
                  variant='h2'
                  color='primary'
                  sx={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    mb: 1,
                  }}
                >
                  {item.year}
                </Typography>
                <Typography
                  variant='h5'
                  sx={{
                    mb: 1,
                    color: 'text.primary',
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  {item.description}
                </Typography>
              </TimelineItem>
            ))}
          </TimelineContent>
        </Container>
      </TimelineContainer>
    </Box>
  )
}

export default Nosotros
