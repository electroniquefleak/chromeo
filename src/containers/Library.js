import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import PlaylistContainer from './PlaylistContainer';
import resetPlaylist from '../actions/resetPlaylist'
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { CssBaseline } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

const Library = ({ resetPlaylist }) => {
  useEffect(() => {
    resetPlaylist()
  }, [resetPlaylist])

    const buttonVariant = <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <Link to="/dashboard" style={{textDecoration: 'none'}}><Button className="playlistButton" variant="contained" style={{ background: '#212F3D', textDecoration: 'white' }}>Create a new playlist</Button></Link></Typography>

    return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
            <AppBar
              position="fixed"
              sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
            >
              <Navbar button={buttonVariant}/>
            </AppBar>
            <Box
              component="main"
              style={{background: 'rgba(0,0,0,0)'}}
              sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
              <Toolbar />
                <PlaylistContainer />
            </Box>
          <Sidebar />
      </Box>
    )
}

export default connect(null, { resetPlaylist })(Library);