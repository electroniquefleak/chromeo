const playlistReducer = (state = 
    {playlistID: null, playlistName: null, tracks: [], message: ''},
    action) => {
    switch (action.type) {
        case 'FETCH_TRACKS':
            return {...state, tracks: action.payload};
        case 'SPOTIFY_ERROR':
            console.log("error in reducer");
            return {...state, message: action.payload};
        default:
            return {...state};
    }


}

export default playlistReducer;