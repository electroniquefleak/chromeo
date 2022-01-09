
const TrackCard = ({title, artist, length, art }) => {
    return (
        <div className="trackCard">
            {art && <img className="albumArt" src={art} alt="album art"/>}
            <span>{title}</span>
            <span>{artist}</span>
            <span>{length}</span>
        </div>
    )
}
export default TrackCard;