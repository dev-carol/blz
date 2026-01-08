import { Box, Typography } from '@mui/material';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => (
  <Box mb={3}>
    <Typography variant="h4">{title}</Typography>
    {description && (
      <Typography color="text.secondary">{description}</Typography>
    )}
  </Box>
);

export default PageHeader;
