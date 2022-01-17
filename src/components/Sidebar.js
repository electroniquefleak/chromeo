import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { connect } from 'react-redux';
import Typography from '@mui/material/Typography'
import { useEffect } from 'react';
import fetchLibrary from '../actions/fetchLibrary'
import fetchTracksChromeo from '../actions/fetchTracksChromeo';

const drawerWidth = 240;

const Sidebar = ({ library, fetchLibrary, fetchTracksChromeo }) => {
    useEffect(() => {
        fetchLibrary()
    }, [fetchLibrary])

  return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Toolbar style={{ color: '#FFFFFF', background: '#131F2B' }}>
            <Typography noWrap component="div">
              My Library
            </Typography>
        </Toolbar>
        <Divider />
        <List>
          {library.length > 0 ? library.map(playlist => (
            <ListItem button key={playlist.playlistID}>
              <ListItemText primary={playlist.playlistName} onClick={() => fetchTracksChromeo(playlist.playlistID)}/>
            </ListItem>
          )): <p>Nothing in your library.  Create a new playlist!</p>}
        </List>
      </Drawer>
  );
}

const mapStateToProps = state => {
    return {library: state.library}
}

export default connect(mapStateToProps, {fetchLibrary, fetchTracksChromeo})(Sidebar);