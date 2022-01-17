import { style } from "@mui/system";
import millisToMinutesAndSeconds from "../services/duration_helper";

const TrackCard = ({ title, artist, length, art, explicit }) => {
    return (
        <div className="trackCard">
            <div>
            {art && <img className="albumArt" src={art} alt="album art"/>}
            </div>
            <div>
                <b><span>{explicit && "EXPLICIT"}</span><br />
                {title}</b>
            </div>
            <div>
                <p>{artist}</p>
                <span>{millisToMinutesAndSeconds(length)}</span>
            </div>
        </div>
    )
}

export default TrackCard;