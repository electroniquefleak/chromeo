import millisToMinutesAndSeconds from "../services/duration_helper";

const TrackCard = ({ title, artist, length, art, explicit }) => {
    return (
        <div className="trackCard">
            {art && <img className="albumArt" src={art} alt="album art"/>}
            <span>{explicit && "Explicit"}</span>
            <span>{title}</span>
            <span>{artist}</span>
            <span>{millisToMinutesAndSeconds(length)}</span>
        </div>
    )
}
export default TrackCard;