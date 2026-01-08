import { Modal, Box, Typography, Button } from '@mui/material';
import type { Game } from '../../types/game';

interface Props {
  open: boolean;
  onClose: () => void;
  game: Game | null;
}

const PlayGame: React.FC<Props> = ({ open, onClose, game }) => {
  if (!game) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 420,
          bgcolor: 'rgba(10,15,25,0.95)',
          borderRadius: 3,
          p: 4,
          boxShadow: 24,
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" fontWeight={700} mb={1}>
          Preparando o jogo 🎮
        </Typography>

        <Typography color="text.secondary" mb={3}>
          {game.name} está quase pronto para você!
        </Typography>

    
        <Box
          component="img"
          src="https://images.emojiterra.com/google/noto-emoji/animated-emoji/1f3b0.gif"
          alt="Loading game"
          sx={{
            width: '100%',
            maxWidth: 300,
            mx: 'auto',
            ml: 4,
            mb: 3,
            borderRadius: 2,
          }}
        />

        <Typography variant="body2" color="text.secondary" mb={3}>
          Win!
        </Typography>

        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={onClose}
        >
          Voltar
        </Button>
      </Box>
    </Modal>
  );
};

export default PlayGame;
