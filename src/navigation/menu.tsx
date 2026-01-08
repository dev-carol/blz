import React from 'react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

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
    icon: <SportsEsportsIcon />,
    items: [
      { name: 'Crash', path: '/official/crash' },
      { name: 'Dice', path: '/official/dice' },
    ],
  },
  {
    category: 'Cassino',
    icon: <SportsEsportsIcon />,
    items: [
      { name: 'Slots', path: '/cassino/slots' },
      { name: 'Roulete', path: '/cassino/roulete' },
    ],
  },
  {
    category: 'Sports',
    icon: <SportsEsportsIcon />,
    items: [
      { name: 'League Of Legends', path: '/sports/leagueoflegends' },
      { name: 'Counter Striker', path: '/sports/' },
    ],
  },
];
