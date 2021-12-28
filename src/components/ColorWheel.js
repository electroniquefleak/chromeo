import { connect } from "react-redux";

// user will see all 12 colors
// user will select color(s) -- a redux dispatch will update the global redux state of colors and the playlist

import ColorCircle from "./ColorCircle";

const ColorWheel = () => {
    const colors = [
        {
            id: 1,
            hex: '#FF0000',
            isSelected: false
        },
        {
            id: 2,
            hex: '#E67E22',
            isSelected: false
        },
        {
            id: 3,
            hex: '#F4D03F',
            isSelected: false
        },
        {
            id: 4,
            hex: '#28B463',
            isSelected: false
        },
        {
            id: 5,
            hex: '#DDF0F3',
            isSelected: false
        },
        {
            id: 6,
            hex: '#D4E6F1',
            isSelected: false
        },
        {
            id: 7,
            hex: '#898DFC',
            isSelected: false
        },
        {
            id: 8,
            hex: '#9152FF',
            isSelected: false
        },
        {
            id: 9,
            hex: '#EAA4FF',
            isSelected: false
        },
        {
            id: 10,
            hex: '#E95793',
            isSelected: false
        },
        {
            id: 11,
            hex: '#C48787',
            isSelected: false
        },
        {
            id: 12,
            hex: '#CF223C',
            isSelected: false
        },
    ];
 
    const colorCircles = colors.map(color => <ColorCircle key={color.id} hex={color.hex} isSelected={color.isSelected} />)
    return (
        <>
            {colorCircles}
        </>
    )
}

// const mapStateToProps = state => {
//     colors: state.colors
// }
export default connect(null)(ColorWheel);