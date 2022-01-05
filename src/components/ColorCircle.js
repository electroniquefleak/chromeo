import fetchTracks from "../actions/fetchTracks";
import toggleCircle from '../actions/toggleCircle'
import { connect } from "react-redux";

const ColorCircle = ({ id, hex, enabled, toggleCircle, fetchTracks}) => {
    const handleToggle = () => {
        if (enabled) {
            toggleCircle(id);
        //also fetch the tracks (TODO)
        } else {
            // use the Snackbar to tell the user it is full
        }
        
    }
    return <span className="colorCircle" style={{backgroundColor: hex}} onClick={handleToggle}></span>
}

export default connect(null, {fetchTracks, toggleCircle})(ColorCircle);