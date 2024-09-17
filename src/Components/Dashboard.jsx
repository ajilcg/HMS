import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Cards from './Cards';


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];
// const imgs=['src/assets/images/patient.jpg','src/assets/images/doctor.jpg','src/assets/images/doctor.jpg']
// const title=['Patient Management','Doctor Management']

const dat=[
    {"imgs":"src/assets/images/patient.jpg","titles":"Patient Management","content":"Register new patients, update patient profiles, and manage medical history","path":"Patient"},
    {"imgs":"src/assets/images/doctor.jpg","titles":'Doctor Management',"content":"Manage doctors, specializations, and scheduling"},
    {"imgs":"src/assets/images/appoiment.jpg","titles":"Appointment Scheduling","content":"Book and manage appointments, automated scheduling alerts"},
    {"imgs":"src/assets/images/billing.jpg","titles":"Billing System","content":"Track treatments, medications, and generate bills for patients"},
    {"imgs":"src/assets/images/pharmacy.jpg","titles":"Pharmacy Management","content":"Manage medicine inventory, prescriptions, and sales"},
]

const Dashboard=(props)=>{ 
  
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
      };
    
      const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            HMS
          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    
      const container = window !== undefined ? () => window().document.body : undefined;

      
return(
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar style={{backgroundColor:'#32b1a8'}} component="nav">
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
        <Typography align='left'
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          HMS
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: '#fff' }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
    <nav style={{backgroundColor:'red'}}>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
    <Box component="main">
      <Toolbar />
      {/* <div className='row'>
    {imgs.map((item)=>(
            <div className='col-sm'>
            <Cards val={item}></Cards>
            </div>
    ))}
    </div> */}

    

    <div className='row'>
    {dat.map((item)=>(
            <div className='col-sm'>
            <Cards val={item}></Cards>
            </div>
    ))}
    </div>
  
    </Box>
  </Box>
)
}
Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  
export default Dashboard