import { useState } from 'react';
import fetchTracks from "../actions/fetchTracks";
import toggleCircle from '../actions/toggleCircle'
import { connect } from "react-redux";
import Snackbar from '@mui/material/Snackbar';

const ColorCircle = ({ id, hex, enabled, toggleCircle, fetchTracks}) => {
    const [open, setOpen] = useState(false);

    const handleSnack = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    
    const handleToggle = () => {
        if (enabled) {
            toggleCircle(id);
            fetchTracks();
        } else {
            fetchTracks();
            handleSnack();
        }
        
    }
    return (
    <>
        <span className="colorCircle" style={{backgroundColor: hex}} onClick={handleToggle}></span>
        <Snackbar
            autoHideDuration={6000}
            open={open}
            onClose={handleClose}
            message="Cannot select anymore colors."
        />
    </>
    );
}

export default connect(null, {fetchTracks, toggleCircle})(ColorCircle);