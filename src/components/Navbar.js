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


function ButtonAppBar({logout}) {
  const navigate = useNavigate()
  const handleLogout = () => {
    logout();
    navigate('/');
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: '#EB984E' }} position="static">
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
            <Link to="/"><Button style={{ background: '#4682b4' }} variant="contained">Home</Button></Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/playlists"><Button style={{ background: '#4682b4' }} variant="contained">Playlists</Button></Link>
          </Typography>
            <Button style={{ background: '#4682b4' }} variant="contained" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default connect(null,{logout})(ButtonAppBar);