import { connect } from "react-redux";
import { Paper } from "@mui/material";
import ColorCircle from "./ColorCircle";

const ColorWheel = ({colors}) => {

    const selectedColors = colors.filter(color => color.isSelected).map(color =><ColorCircle key={color.id} id={color.id} hex={color.hex} enabled={true} />)
    const unselectedColors = colors.filter(color => !color.isSelected).map(color =><ColorCircle key={color.id} id={color.id} hex={color.hex} enabled={selectedColors.length < 5 } />)

    return (
        <>
            <h2 className="wheelHeader">Color Wheel:</h2>
            <Paper className="wheel" elevation={10} square={false}>
            {unselectedColors}
            </Paper>
            <h2 className="easelHeader">Easel:</h2>
            <Paper className="easel" elevation={10} square={false}>
            {selectedColors}
            </Paper>
        </>
    )
}

const mapStateToProps = state => {
    return {colors: state.colors}
}
export default connect(mapStateToProps)(ColorWheel);