import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
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
    
    setGames([]);
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
          <Box mt={2}>
            <Grid container spacing={2}>
              {games.map((game) => (
                <Grid item key={game.id} xs={12} sm={6} md={4} lg={3}>
                  <GameCard game={game} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GamePickerModal;
