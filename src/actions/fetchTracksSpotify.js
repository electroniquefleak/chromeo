const fetchTracksSpotify = () => {
    return (dispatch, getState) => {
        const SPOTIFY_BASE_URL = "https://api.spotify.com/v1/recommendations";
        const token = window.localStorage.getItem("token") || getState().token;
        const headers = {
            method: 'get', 
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        };
        const colors = getState().colors;
        const selectedGenres = colors.filter(color => color.isSelected).map(color => color.genre)
        const genresString = selectedGenres.join("%2C")
        fetch(SPOTIFY_BASE_URL + "?seed_genres=" + genresString, headers)
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                dispatch(
                    {
                        type: "SPOTIFY_ERROR",
                        payload: data.error.message
                    }
                )
            } else {
                dispatch(
                    {
                        type: "FETCH_TRACKS_SPOTIFY",
                        payload: data.tracks.map(track => {
                            return ({
                                spotifyID: track.id,
                                art: track.album.images[0].url,
                                explicit: track.explicit,
                                title: track.name,
                                artist: track.artists.map(artist => artist.name).join(", "),
                                length: track.duration_ms
                            })
                        })
                    }
                )
            }
        })
        .catch(error => console.log(error))


    }
}

export default fetchTracksSpotify;