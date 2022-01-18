import Sidebar from '../components/Sidebar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { CssBaseline } from '@mui/material';
import PlaylistContainer from './PlaylistContainer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import resetPlaylist from '../actions/resetPlaylist'
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar';

const drawerWidth = 240;

const Library = ({ resetPlaylist }) => {
  useEffect(() => {
    resetPlaylist()
  }, [resetPlaylist])

    const buttonVariant = <Link to="/dashboard" style={{textDecoration: 'none'}}><Button className="playlistButton" variant="contained" style={{ background: '#131f2b', textDecoration: 'white' }}>Create a new playlist</Button></Link>

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