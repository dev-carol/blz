import React from 'react';
import { Box } from '@mui/material';
import Sidebar from '../components/menu/Sidebar';
import Header from '../components/menu/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh', 
        width: '100vw',
        bgcolor: 'background.default',
        overflow: 'hidden',
      }}
    >
  
      <Box
        sx={{
          width: 250,
          flexShrink: 0,
          height: '100%',
          bgcolor: 'background.paper',
          overflowY: 'auto',
        }}
      >
        <Sidebar />
      </Box>


      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          height: '100%',
          overflow: 'hidden', 
        }}
      >
    
        <Box sx={{ flexShrink: 0 }}>
          <Header />
        </Box>

        
        <Box
          component="main"
          sx={{
            flex: 1,
            overflowY: 'auto',
            p: 2,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
