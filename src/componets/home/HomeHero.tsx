import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import GamePickerModal from '../gamePicker/GamePicker';


const HomeHero = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1050&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 2,
          textAlign: 'center',
          color: '#fff',
          py: 12,
          mb: 6,
        }}
      >
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Bem-vindo à BLZ
        </Typography>

        <Typography variant="h6" mb={3}>
          A plataforma de jogos e apostas que coloca você no centro da ação.
        </Typography>

        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={() => setOpen(true)}
        >
          Começar agora
        </Button>
      </Box>

      <GamePickerModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default HomeHero;
