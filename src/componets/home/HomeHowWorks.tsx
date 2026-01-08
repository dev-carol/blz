import { Box, Typography, Grid } from '@mui/material';

const steps = [
  {
    title: 'Crie sua conta',
    desc: 'Cadastre-se em segundos e comece a explorar.',
  },
  {
    title: 'Deposite fundos',
    desc: 'Use seu método de pagamento favorito.',
  },
  {
    title: 'Jogue e divirta-se',
    desc: 'Participe dos jogos e veja sua sorte acontecer!',
  },
];

const HomeHowWorks = () => (
  <Box sx={{ mb: 8 }}>
    {/* Wrapper central */}
    <Box
      sx={{
        maxWidth: 1200,
        mx: 'auto',
        px: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        mb={4}
      >
        Como funciona
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        textAlign="center"
      >
        {steps.map((step, i) => (
          <Grid key={i} xs={12} sm={4}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              {step.title}
            </Typography>

            <Typography color="text.secondary">
              {step.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default HomeHowWorks;
