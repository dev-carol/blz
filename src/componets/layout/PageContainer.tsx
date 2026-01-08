import { Box } from '@mui/material';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1400,
        mx: 'auto',
        px: { xs: 1, sm: 2, md: 3 },
        py: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
