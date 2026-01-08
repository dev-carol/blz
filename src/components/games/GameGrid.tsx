import { Box } from '@mui/material';
import type { Game } from '../../types/game';
import GameCard from './GameCard';

interface Props {
  games: Game[];
}

const GameGrid: React.FC<Props> = ({ games }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: '1fr',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(4, 1fr)',
      }}
      gap={2}
    >
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Box>
  );
};

export default GameGrid;
