import { Box, Typography, Stack } from '@mui/material';

const methods = [
  { name: 'Bitcoin', icon: '💰' },
  { name: 'Cartão de Crédito', icon: '💳' },
  { name: 'PIX', icon: '⚡' },
  { name: 'Boleto', icon: '🧾' },
];

const HomePayments = () => (
  <Box sx={{ mb: 8 }}>
    <Typography variant="h4" fontWeight={700} textAlign="center" mb={3}>
      Métodos de pagamento
    </Typography>

    <Stack direction="row" spacing={4} justifyContent="center">
      {methods.map((m) => (
        <Box textAlign="center" key={m.name}>
          <Typography fontSize={36}>{m.icon}</Typography>
          <Typography>{m.name}</Typography>
        </Box>
      ))}
    </Stack>
  </Box>
);

export default HomePayments;
