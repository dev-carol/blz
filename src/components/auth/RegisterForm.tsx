import { Stack, TextField, Button } from '@mui/material';

const RegisterForm = () => (
  <Stack spacing={2}>
    <TextField
      label="Email"
      type="email"
      fullWidth
    />

     <TextField
      label="CPF"
      type="number"
      fullWidth
    />

    <TextField
      label="Senha"
      type="password"
      fullWidth
    />

    <TextField
      label="Confirmar senha"
      type="password"
      fullWidth
    />

    <Button variant="contained" size="large">
      Criar conta
    </Button>
  </Stack>
);

export default RegisterForm;
