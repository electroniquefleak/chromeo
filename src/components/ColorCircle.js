import { useState } from 'react';
import fetchTracksSpotify from "../actions/fetchTracksSpotify";
import toggleCircle from '../actions/toggleCircle'
import { connect } from "react-redux";
import Snackbar from '@mui/material/Snackbar';
import { Popover } from '@mui/material';
import { Typography } from '@mui/material';


const ColorCircle = ({ id, hex, enabled, toggleCircle, fetchTracksSpotify, message}) => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openPop = Boolean(anchorEl);

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
      setAnchorEl(null);
    };

    const handleSnack = () => {
      setOpen(true);
    };
  
    const onSnackClose = (reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    
    const handleToggle = () => {
        if (enabled) {
            toggleCircle(id);
            fetchTracksSpotify();
        } else {
            handleSnack();
        }
        
    }

    return (
    <>
        <span className="colorCircle" style={{backgroundImage: `conic-gradient(from 0deg, #fff, ${hex})`}} onClick={handleToggle} onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}></span>
        <Snackbar
            autoHideDuration={1400}
            open={open}
            onClose={onSnackClose}
            message="Cannot select anymore colors."
        />
        <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={openPop}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{message}</Typography>
      </Popover>
    </>
    );
}

export default connect(null, {fetchTracksSpotify, toggleCircle})(ColorCircle);