import React from 'react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import CasinoIcon from '@mui/icons-material/Casino';

export interface SubMenuItem {
  name: string;
  path: string;
}

export interface MenuCategory {
  category: string;
  icon: React.ReactNode;
  items: SubMenuItem[];
}

export const menu: MenuCategory[] = [
   {
    category: 'Originais',
    icon: <GroupWorkIcon color='primary' />,
    items: [
      { name: 'Crash', path: '/official/crash' },
      { name: 'Dice', path: '/official/dice' },
    ],
  },
  {
    category: 'Cassino',
    icon: <CasinoIcon color='primary' />,
    items: [
      { name: 'Slots', path: '/cassino/slots' },
      { name: 'Roulete', path: '/cassino/roulete' },
    ],
  },
  {
    category: 'Sports',
    icon: <SportsEsportsIcon color='primary' />,
    items: [
      { name: 'League Of Legends', path: '/sports/leagueoflegends' },
      { name: 'Counter Striker', path: '/sports/counterstrike' },
    ],
  },
];
