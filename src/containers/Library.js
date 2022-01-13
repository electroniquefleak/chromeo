import Sidebar from '../components/Sidebar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { CssBaseline } from '@mui/material';
import PlaylistContainer from './PlaylistContainer';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import resetPlaylist from '../actions/resetPlaylist'
import { useEffect } from 'react';

const drawerWidth = 240;

const Library = ({ resetPlaylist }) => {
  useEffect(() => {
    resetPlaylist()
  }, [resetPlaylist])
    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Playlist
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Toolbar >
              <Link to="/dashboard">Create a new playlist</Link>
          </Toolbar>
            <PlaylistContainer />
        </Box>
        <Sidebar />
      </Box>
    )
}
export default connect(null, { resetPlaylist })(Library);