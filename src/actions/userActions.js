const url = process.env.REACT_APP_ENDPOINT;

const setUser = (res, dispatch) => {
    if (res.ok) {
        res.json()
        .then(user => {
            window.localStorage.userToken = user.token;
            window.localStorage.userID = user.user.id
            dispatch(
                {
                    type: "SET_USER",
                    userID: user.user.id,
                    userToken: user.token
                }
            )
        })
    } else {
        res.json()
        .then(error => alert(error.errors))
    }
}

export const addUser = user => {
    return dispatch => fetch(url + "users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res =>setUser(res, dispatch))
    .catch(error => alert(error))
}

export const loginUser = user => {
    return dispatch => fetch(url + "sessions", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res =>setUser(res, dispatch))
    .catch(error => alert(error))
}

export const logout = () => {
    return dispatch => {
        localStorage.clear()
        dispatch(
            {type: "LOGOUT"}
        )
    }
}