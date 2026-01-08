import React, { useState } from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useNavigate } from 'react-router-dom';
import { menu } from '../../navigation/menu';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <Box width={250} bgcolor="background.paper" p={1}>
      {menu.map((cat) => (
        <Accordion
          key={cat.category}
          expanded={expanded === cat.category}
          onChange={handleChange(cat.category)}
          sx={{
            bgcolor: 'background.paper',
            color: 'text.primary',
            boxShadow: 'none',
            '&:before': { display: 'none' }
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 1 }}>
            <ListItemIcon sx={{ minWidth: 30 }}>{cat.icon}</ListItemIcon>
            <Typography variant="subtitle1">{cat.category}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            <List>
              {cat.items.map((item) => (
                <ListItem key={item.name} disablePadding>
                  <ListItemButton onClick={() => navigate(item.path)} sx={{ pl: 4 }}>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Sidebar;
