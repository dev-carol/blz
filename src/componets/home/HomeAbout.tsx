import { Box, Typography, Grid } from '@mui/material';

const HomeAbout = () => {
  return (
    <Box sx={{ mb: 8 }}>
      <Typography variant="h4" fontWeight={700} textAlign="center" mb={3}>
        O que é a BLZ?
      </Typography>

      <Typography textAlign="center" color="text.secondary" maxWidth={800} mx="auto">
        A BLZ é uma plataforma de apostas online inspirada nas maiores casas de aposta...
        Aqui você pode explorar jogos, entender probabilidades e simular estratégias.
      </Typography>
    </Box>
  );
};

export default HomeAbout;
