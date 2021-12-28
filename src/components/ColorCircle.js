import fetchTracks from "../actions/fetchTracks";
import { connect } from "react-redux";

const ColorCircle = ({ hex, isSelected=false, fetchTracks }) => {
    const handleToggle = () => {
        if (isSelected) {
            // remove the color and change the playlist
        } else {
            // add the color and change the playlist
            fetchTracks();
        }
    }
    return <span className="colorCircle" style={{backgroundColor: hex}} onClick={handleToggle}></span>
}

export default connect(null, {fetchTracks})(ColorCircle);