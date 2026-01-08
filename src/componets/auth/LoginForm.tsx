import { Stack, TextField, Button } from '@mui/material';

const LoginForm = () => (
  <Stack spacing={2}>
    <TextField
      label="Email"
      type="email"
      fullWidth
    />

    <TextField
      label="Senha"
      type="password"
      fullWidth
    />

    <Button variant="contained" size="large">
      Entrar
    </Button>
  </Stack>
);

export default LoginForm;
