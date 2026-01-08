import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F12C4C',
    },
    secondary: {
      main: '#0F1923',
    },
    background: {
      default: '#0B1218', 
      paper: 'rgba(15, 25, 35, 0.65)', 
      
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255,255,255,0.6)',
    },
  },

  typography: {
    fontFamily: 'Inter, Roboto, sans-serif', 
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0B1218',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backdropFilter: 'blur(12px)', 
          border: '1px solid rgba(255,255,255,0.06)',
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(15, 25, 35, 0.7)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
