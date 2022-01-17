const fetchTracksChromeo = (playlistID) => {
    return (dispatch) => {
        const BASE_URL = "http://localhost:3000/playlists/";
        fetch(BASE_URL + playlistID)
        .then(res => res.json())
        .then(data => {
            console.log({data})
            dispatch(
                {
                    type: "FETCH_TRACKS_CHROMEO",
                    tracks: data.tracks.map(track => {
                        return ({
                            spotifyID: track.spotifyID,
                            art: track.art,
                            explicit: track.explicit,
                            title: track.title,
                            artist: track.artist,
                            length: track.length
                        })
                    }),
                    playlistName: data.name,
                    playlistID: data.id
                }
            )
        })
        .catch(error => console.log(error))


    }
}

export default fetchTracksChromeo;