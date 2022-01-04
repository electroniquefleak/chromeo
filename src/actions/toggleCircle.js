const toggleCircle = (colorID) => {
    return dispatch => {
        dispatch(
            {
                type: "TOGGLE_COLOR",
                payload: colorID
            }
        )
    }
}
export default toggleCircle;