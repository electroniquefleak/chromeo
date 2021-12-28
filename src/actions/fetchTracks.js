const fetchTracks = () => {
    return dispatch => {
        // fetch from Spotify and do more things...
        dispatch(
            {
                type: "FETCH_TRACKS",
                payload: {
                    playlistID: "1234", //TODO: change this template
                    tracks: [
                        {
                            title: "Track 1", //TODO: change this template
                        },
                    ]
                }
            }
        )
    }
}
export default fetchTracks;