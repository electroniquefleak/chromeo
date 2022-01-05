const toggleCircle = (colorID) => {
    return (
        {
            type: "TOGGLE_COLOR",
            payload: colorID
        }
    )
}
export default toggleCircle;