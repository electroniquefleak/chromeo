import fetchTracks from "../actions/fetchTracks";
import toggleCircle from '../actions/toggleCircle'
import { connect } from "react-redux";

const ColorCircle = ({ id, hex, fetchTracks}) => {
    const handleToggle = () => {
        console.log(id);
    }
    return <span className="colorCircle" style={{backgroundColor: hex}} onClick={handleToggle}></span>
}

export default connect(null, {fetchTracks, toggleCircle})(ColorCircle);