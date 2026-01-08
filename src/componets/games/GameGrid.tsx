import { Grid } from '@mui/material';
import type { Game } from '../../types/game';
import GameCard from './GameCard';

interface Props {
  games: Game[];
}

const GameGrid: React.FC<Props> = ({ games }) => {
  return (
    <Grid container spacing={2}>
      {games.map((game) => (
        <Grid key={game.id} xs={12} sm={6} md={3}>
          <GameCard game={game} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GameGrid;
