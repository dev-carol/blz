import { useEffect, useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';

import type { Game } from '../types/game';
import { getGamesByCategory } from '../api/api';
import GameGrid from '../components/games/GameGrid';

interface GamesPageTemplateProps {
  title: string;
  description: string;
  category: string;
}

const GamesPageTemplate: React.FC<GamesPageTemplateProps> = ({
  title,
  description,
  category,
}) => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    getGamesByCategory(category).then((data) => {
      if (!active) return;
      setGames(data);
      setLoading(false);
    });

    return () => {
      active = false;
    };
  }, [category]);

  return (
    <Box>
    
      <Box mb={3}>
        <Typography variant="h4" fontWeight={700}>
          {title}
        </Typography>

        <Typography color="text.secondary">
          {description}
        </Typography>

        {!loading && (
          <Typography
            variant="caption"
            color="text.secondary"
            display="block"
            mt={1}
          >
            {games.length} jogos disponíveis
          </Typography>
        )}
      </Box>

      <Divider sx={{ mb: 3 }} />

      {loading ? (
        <Typography color="text.secondary">
          Carregando jogos...
        </Typography>
      ) : games.length === 0 ? (
        <Typography color="text.secondary">
          Nenhum jogo disponível nesta categoria.
        </Typography>
      ) : (
        <GameGrid games={games} />
      )}
    </Box>
  );
};

export default GamesPageTemplate;
