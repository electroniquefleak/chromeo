import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/userActions'


function ButtonAppBar({button, logout}) {
  const navigate = useNavigate()
  const handleLogout = () => {
    logout();
    navigate('/');
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: '#131F2B' }} position="static">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button className="homeButton" href="/" style={{ background: '#212F3D' }} variant="contained">Home</Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {button}
          </Typography>
            <Button className="logoutButton" style={{ background: '#212F3D' }} variant="contained" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default connect(null,{logout})(ButtonAppBar);