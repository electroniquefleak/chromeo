const TrackCard = ({ spotifyID }) => {
    return (
        <div className="trackCard">
           <iframe 
            src={`https://open.spotify.com/embed/track/${spotifyID}`}
            width="100%" 
            height="80" 
            frameBorder="0" 
            allowtransparency="true" 
            allow="encrypted-media"></iframe>
        </div>
    )
}

export default TrackCard;