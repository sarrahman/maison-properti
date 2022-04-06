import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import QuizIcon from '@mui/icons-material/Quiz';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton onClick={() => {
      window.location.href = '/dashboard';
    }}>
      <ListItemIcon>
        <DashboardIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton onClick={() => {
      window.location.href = '/';
    }}>
      <ListItemIcon>
        <StoreIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="Web Store" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      About Website
    </ListSubheader>
    <a
      style={{
        textDecoration: "none",
      }}
      href={`https://api.whatsapp.com/send?phone=6281249363040&text=Hallo admin`}
    >
    <ListItemButton>
      <ListItemIcon>
        <SupportAgentIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="Contact Support" />
    </ListItemButton>
    </a>
    <ListItemButton>
      <ListItemIcon>
        <QuizIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="FAQ" />
    </ListItemButton>
  </React.Fragment>
);