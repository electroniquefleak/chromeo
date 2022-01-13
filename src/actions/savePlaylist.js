const savePlaylist = (name, tracksArr) => {
    const url = process.env.REACT_APP_ENDPOINT;
    return (dispatch) => {
        console.log({tracksArr});
        const playlist = {
            name: name,
            tracks: tracksArr,
            user_id: localStorage.getItem("userID")
        }
        console.log({playlist});
        fetch(url + "playlists", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(playlist)
        })
        .then(res => res.json())
        .then(playlist => console.log({playlist}))
        .catch(error => console.log(error))


    }
}
export default savePlaylist;