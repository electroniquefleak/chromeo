const fetchLibrary = () => {
    return (dispatch) => {
        const BASE_URL = "http://localhost:3000/users/";
        const userId = localStorage.getItem("userID");
        fetch(BASE_URL + userId)
        .then(res => res.json())
        .then(data => {
            dispatch(
                {
                    type: "FETCH_LIBRARY",
                    payload: data.playlists.map(playlist => (
                        {
                            playlistName: playlist.name,
                            playlistID: playlist.id
                        }
                    ))
                }
            )
        })
        .catch(error => console.log(error))


    }
}

export default fetchLibrary;