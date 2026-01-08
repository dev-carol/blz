import { Box, Typography, Button } from '@mui/material';
import { useState } from 'react';
import LoginModal from '../auth/LoginModal';
import type { AuthMode } from '../../types/auth';


const HomeCTA = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<AuthMode>('register');

  return (
    <>
      <Box textAlign="center" py={6}>
        <Typography variant="h5" fontWeight={700} mb={2}>
          Pronto para começar?
        </Typography>

        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={() => {
            setMode('register');
            setOpen(true);
          }}
        >
          Abrir conta grátis
        </Button>
      </Box>

      <LoginModal
        open={open}
        mode={mode}
        onClose={() => setOpen(false)}
        onModeChange={setMode}
      />
    </>
  );
};

export default HomeCTA;
