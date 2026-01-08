import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import LoginForm from './LoginForm';
import type { AuthMode } from '../../types/auth';
import RegisterForm from './RegisterForm';

interface Props {
  open: boolean;
  mode: AuthMode;
  onClose: () => void;
  onModeChange: (mode: AuthMode) => void;
}

const LoginModal: React.FC<Props> = ({
  open,
  mode,
  onClose,
  onModeChange,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth >
      <DialogTitle sx={{ textAlign: 'center' }}  style={{backgroundColor:"#1d2f46ff"}}>
        {mode === 'login' ? 'Entrar' : 'Criar conta'}

        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent  style={{backgroundColor:"#1d2f46ff"}}>
        {mode === 'login' ? <LoginForm /> : <RegisterForm />}

        <Stack alignItems="center" mt={3}>
          <Button
            size="small"
            onClick={() =>
              onModeChange(mode === 'login' ? 'register' : 'login')
            }
          >
            {mode === 'login'
              ? 'Criar uma conta'
              : 'Já tenho conta'}
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
