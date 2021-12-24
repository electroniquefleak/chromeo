const playlistReducer = (state = {playlistID: '', tracks: []}, action) => {
    switch (action.type) {
        case 'FETCH_TRACKS':
            return action.payload
        default:
            return state;
    }


}

export default playlistReducer;