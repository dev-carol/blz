import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,

} from '@mui/material';
import { useEffect, useState } from 'react';
import type { Game } from '../../types/game';
import { getAllGames } from '../../api/api';
import GameCard from '../games/GameCard';

interface Props {
  open: boolean;
  onClose: () => void;
}

const GamePickerModal: React.FC<Props> = ({ open, onClose }) => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    if (!open) return;
    getAllGames().then(setGames);
  }, [open]);

  const loading = open && games.length === 0;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle fontWeight={700}>
        Escolha um jogo para começar 🎮
      </DialogTitle>

      <DialogContent>
        {loading ? (
          <Typography color="text.secondary">
            Carregando jogos...
          </Typography>
        ) : (
          <Box
            mt={2}
            display="grid"
            gridTemplateColumns={{
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
            gap={2}
          >
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </Box>

        )}
      </DialogContent>
    </Dialog>
  );
};

export default GamePickerModal;
