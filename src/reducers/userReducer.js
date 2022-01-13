const userReducer = (state = {userId: "", userToken: ""}, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {...state, userId: action.userId, userToken: action.userToken };
        case 'LOGOUT':
            return {...state, userId: "", userToken: ""};
        default:
            return state;
    }
}

export default userReducer;