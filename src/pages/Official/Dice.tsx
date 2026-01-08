import React from 'react';
import { Box, Typography } from '@mui/material';

const Dice: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dice
      </Typography>
      <Typography>
        Aqui vai o conteúdo do jogo Dice, estatísticas, apostas, histórico e gráficos.
      </Typography>
    </Box>
  );
};

export default Dice;
