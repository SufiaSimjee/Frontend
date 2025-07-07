import { Box, Button, Typography, Container } from '@mui/material';
import Lottie from 'lottie-react';
import NotFoundAnimation from '../assets/animations/NotFound.json';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: '80vh',
        pt: 4,
        pb: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Box sx={{ width: '80%', maxWidth: 300, mb: 2 }}>
        <Lottie animationData={NotFoundAnimation} loop={true} />
      </Box>

      <Typography
        variant="h1"
        component="h1"
        color="error"
        fontWeight="bold"
        mb={1}
      >
        404
      </Typography>

      <Typography variant="h4" component="h2" mb={3} sx={{ color: '#1e3163' }}>
        Oops! Page Not Found
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        mb={4}
        sx={{ maxWidth: 420, mx: 'auto' }}
      >
        The page you are looking for doesn&apos;t exist or has been moved.
      </Typography>

      <Button
        component={Link}
        variant="contained"
        color="primary"
        to="/"
        sx={{ px: 3, py: 1.5, fontSize: '1rem' }}
      >
        Go Home
      </Button>
    </Container>
  );
};

export default NotFound;
