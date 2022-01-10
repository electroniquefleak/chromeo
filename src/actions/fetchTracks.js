const fetchTracks = () => {
    return (dispatch, getState) => {
        const SPOTIFY_BASE_URL = "https://api.spotify.com/v1/recommendations";
        const token = getState().token;
        const headers = {
            method: 'get', 
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        };
        const genres = ["classical", "country"]
        const genresString = genres.join("%2C")
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
                console.log(data)
                dispatch(
                    {
                        type: "FETCH_TRACKS",
                        payload: data.tracks.map(track => {
                            return ({
                                spotifyID: track.id,
                                title: track.name,
                                artist: track.artists.map(artist => artist.name).join(", "),
                                length: track.duration
                            })
                        })
                    }
                )
                dispatch(
                    {
                        type: "SPOTIFY_ERROR",
                        payload: ''
                    }
                )
            }
        })
        .catch(error => console.log(error))


    }
}
export default fetchTracks;