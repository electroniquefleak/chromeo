const initialState = {playlistID: null, playlistName: null, tracks: [], error: ''};
const playlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TRACKS_CHROMEO':
            return {...state, tracks: action.tracks, playlistID: action.playlistID, playlistName: action.playlistName};
        case 'FETCH_TRACKS_SPOTIFY':
            return {...state, tracks: action.payload};
        case 'RESET_PLAYLIST':
            return {...initialState};
        case 'SPOTIFY_ERROR':
            console.log("error in reducer");
            return {...state, error: action.payload};
        default:
            return {...state};
    }
}

export default playlistReducer;