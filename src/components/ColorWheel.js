import { connect } from "react-redux";
import { Paper } from "@mui/material";

// user will see all 12 colors
// user will select color(s) -- a redux dispatch will update the global redux state of colors and the playlist

import ColorCircle from "./ColorCircle";

const ColorWheel = ({colors}) => {
    const unselectedColors = colors.filter(color => !color.isSelected).map(color =><ColorCircle key={color.id} id={color.id} hex={color.hex} />)
    const selectedColors = colors.filter(color => color.isSelected).map(color =><ColorCircle key={color.id} id={color.id} hex={color.hex} />)
    return (
        <>
            <h2>Color Wheel:</h2>
            <Paper elevation={3}>
            {unselectedColors}
            </Paper>
            <h2>Easel:</h2>
            <Paper elevation={3}>
            {selectedColors}
            </Paper>
        </>
    )
}

const mapStateToProps = state => {
    return {colors: state.colors}
}
export default connect(mapStateToProps)(ColorWheel);