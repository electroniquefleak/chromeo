import { connect } from "react-redux";
import { Paper } from "@mui/material";
import ColorCircle from "./ColorCircle";

const ColorWheel = ({colors}) => {

    const selectedColors = colors.filter(color => color.isSelected)
        .map(color =><ColorCircle key={color.id} id={color.id} hex={color.hex} enabled={true} message={color.message}/>)
    const unselectedColors = colors.filter(color => !color.isSelected)
        .map(color =><ColorCircle key={color.id} id={color.id} hex={color.hex} enabled={selectedColors.length < 5 } message={color.message} />)

    return (
        <>
            <h4 className="wheelHeader">Select a color to get started.</h4>
            <Paper style={{background: '#fafdff'}} className="wheel" elevation={10}>
            {unselectedColors}
            </Paper>
            <h4 className="easelHeader">Selected colors:</h4>
            <Paper style={{background: '#fafdff'}} className="easel" elevation={10}>
            {selectedColors}
            </Paper>
        </>
    )
}

const mapStateToProps = state => {
    return {colors: state.colors}
}

export default connect(mapStateToProps)(ColorWheel);