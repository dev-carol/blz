import { Box, Typography, Button, Chip, Stack } from '@mui/material';
import { useState } from 'react';
import type { Game } from '../../types/game';
import PlayGame from '../PlayGame/PlayGame';

interface Props {
  game: Game;
}

const GameCard: React.FC<Props> = ({ game }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'rgba(15,25,35,0.6)',
          backdropFilter: 'blur(12px)',
          borderRadius: 2,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
   
        <Box
          component="img"
          src={game.thumbnail}
          alt={game.name}
          sx={{
            width: '100%',
            height: 160,
            objectFit: 'cover',
          }}
        />

    
        <Box p={1.5} flex={1}>
          <Typography fontWeight={600} noWrap>
            {game.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {game.provider}
          </Typography>

          <Typography variant="body2" sx={{ mt: 1 }} color="text.secondary">
            {game.description}
          </Typography>

          <Stack direction="row" spacing={1} mt={1}>
            {game.isPopular && (
              <Chip label="Popular" color="error" size="small" />
            )}
            {game.isNew && (
              <Chip label="Novo" color="success" size="small" />
            )}
          </Stack>

          {game.playersOnline && (
            <Typography
              variant="caption"
              color="text.secondary"
              display="block"
              mt={1}
            >
              👥 {game.playersOnline.toLocaleString()} jogando agora
            </Typography>
          )}
        </Box>

        <Box p={1.5}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => setOpen(true)}
          >
            Jogar
          </Button>
        </Box>
      </Box>

     
      <PlayGame
        open={open}
        onClose={() => setOpen(false)}
        game={game}
      />
    </>
  );
};

export default GameCard;
