import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import LoginModal from '../auth/LoginModal';
import type { AuthMode } from '../../types/auth';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<AuthMode>('login');


  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: '#63778fff',
      }}
    >
      <Toolbar sx={{ minHeight: 64 }}>

        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          BLZ
        </Typography>

        <Button
          color="inherit"
          onClick={() => {
            setMode('login');
            setOpen(true);
          }}
        >
          Entrar
        </Button>


        <Button
          color="inherit"
          variant="outlined"
          onClick={() => {
            setMode('register');
            setOpen(true);
          }}
        >
          Cadastrar
        </Button>


        <LoginModal
          open={open}
          mode={mode}
          onClose={() => setOpen(false)}
          onModeChange={setMode}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
