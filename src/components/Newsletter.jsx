import { Box, Container, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const NewsletterSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  padding: theme.spacing(8, 0),
  color: 'white'
}));

function Newsletter() {
  return (
    <NewsletterSection>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
          <Typography variant="h4" gutterBottom>
            Suscríbete a Nuestras Ofertas
          </Typography>
          <Typography sx={{ mb: 4 }}>
            Recibe las últimas novedades y ofertas especiales directamente en tu correo.
          </Typography>
          <Box component="form" sx={{ display: 'flex', gap: 2 }}>
            <TextField
              fullWidth
              placeholder="Tu correo electrónico"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white',
                  '& fieldset': {
                    borderColor: 'white'
                  }
                }
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ px: 4 }}
            >
              Suscribirse
            </Button>
          </Box>
        </Box>
      </Container>
    </NewsletterSection>
  );
}

export default Newsletter;