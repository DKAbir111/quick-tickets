import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import LogoutIcon from '@mui/icons-material/Logout';
import { FaDatabase } from "react-icons/fa";
import logo from '../assets/logo.png'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import WalletIcon from '@mui/icons-material/Wallet';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import BarChartIcon from '@mui/icons-material/BarChart';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
const drawerWidth = 240;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
      
      <List >
     

     {/* logo */}

     <ListItem disablePadding>
      <ListItemButton sx={{py:5}}>
      <img src={logo} alt="" />
      </ListItemButton>
         
          </ListItem>


         {/* Dashboard */}
   
       <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <HomeIcon  />
              </ListItemIcon>
              <ListItemText sx={{color:'#5F6368'}} primary={"Dashboard"} />
            </ListItemButton>
          </ListItem>

          {/* Search */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <SearchIcon />
              </ListItemIcon>
              <ListItemText sx={{color:'#5F6368'}} primary={"Search Pad"} />
            </ListItemButton>
          </ListItem>

          {/* Bookings */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <FaDatabase  />
              </ListItemIcon>
              <ListItemText sx={{color:'#5F6368'}} primary={"Bookings"} />
            </ListItemButton>
          </ListItem>


          {/* Settings */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <SettingsIcon  />
              </ListItemIcon>
              <ListItemText sx={{color:'#5F6368'}} primary={"Settings"} />
            </ListItemButton>
          </ListItem>

          {/* Wallet */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <WalletIcon  />
              </ListItemIcon>
              <ListItemText sx={{color:'#5F6368'}} primary={"Wallet"} />
            </ListItemButton>
          </ListItem>

          {/* Account */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <PermIdentityIcon />
              </ListItemIcon>
              <ListItemText sx={{color:'#5F6368'}} primary={"Account"} />
            </ListItemButton>
          </ListItem>

          {/* Manage */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <ManageHistoryIcon  />
              </ListItemIcon>
              <ListItemText sx={{color:'#5F6368'}} primary={"Manage"} />
            </ListItemButton>
          </ListItem>

          {/* Ot Reports */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <BarChartIcon />
              </ListItemIcon>
              <ListItemText sx={{color:'#5F6368'}} primary={"Ot Reports"} />
            </ListItemButton>
          </ListItem>

          {/* logout */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <LogoutIcon   />
              </ListItemIcon>
              <ListItemText sx={{color:'#5F6368'}} primary={"Logout"} />
            </ListItemButton>
          </ListItem>
   
     
      </List>

      <ListItem disablePadding sx={{mb:4}}>
        
      <ListItemButton>
              <ListItemIcon>
              <PermIdentityIcon /> 
              </ListItemIcon>
              <ListItemText sx={{color:'#5F6368'}} primary={"Syed Afridi"} secondary={"Product Manager"} />
            </ListItemButton>

          </ListItem>
   
      
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
  );
}

Sidebar.propTypes = {

  window: PropTypes.func,
};

export default Sidebar;
