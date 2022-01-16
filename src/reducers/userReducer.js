const userReducer = (state = {userID: "", userToken: ""}, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {...state, userID: action.userID, userToken: action.userToken };
        case 'LOGOUT':
            return {...state, userID: "", userToken: ""};
        default:
            return {...state};
    }
}

export default userReducer;