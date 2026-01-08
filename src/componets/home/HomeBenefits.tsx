import { Box, Typography, Grid } from '@mui/material';

const benefits = [
  {
    title: 'Experiência intuitiva',
    desc: 'Interface moderna e simples de usar.',
  },
  {
    title: '100% segura',
    desc: 'Tecnologia de ponta para proteger seus dados.',
  },
  {
    title: 'Suporte 24/7',
    desc: 'Estamos aqui para ajudar sempre que precisar.',
  },
];

const HomeBenefits = () => (
  <Box sx={{ mb: 8 }}>

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
        Por que escolher a BLZ?
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        textAlign="center"
      >
        {benefits.map((b, i) => (
          <Grid key={i} xs={12} sm={4}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              {b.title}
            </Typography>

            <Typography color="text.secondary">
              {b.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default HomeBenefits;
