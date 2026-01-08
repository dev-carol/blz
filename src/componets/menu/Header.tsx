import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Header: React.FC = () => {
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

        <Button color="inherit">Entrar</Button>
        <Button color="inherit" variant="outlined">
          Cadastrar
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
