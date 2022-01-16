const initialColors = [
    {
        id: 1,
        hex: '#AB0034',
        isSelected: false,
        genre: 'classical',
        message: 'DEEP RED'
    },
    {
        id: 2,
        hex: '#FF0000',
        isSelected: false,
        genre: 'country',
        message: 'RED'
    },
    {
        id: 3,
        hex: '#FF7F00',
        isSelected: false,
        genre: 'rock',
        message: 'ORANGE'
    },
    {
        id: 4,
        hex: '#FFFF00',
        isSelected: false,
        genre: 'pop',
        message: 'YELLOW'
    },
    {
        id: 5,
        hex: '#33CC33',
        isSelected: false,
        genre: 'hip-hop',
        message: 'GREEN'
    },
    {
        id: 6,
        hex: '#C3F2FF',
        isSelected: false,
        genre: 'pop',
        message: 'SKY BLUE'
    },
    {
        id: 7,
        hex: '#8EC9FF',
        isSelected: false,
        genre: 'pop',
        message: 'BLUE'
    },
    {
        id: 8,
        hex: '#7F8BFD',
        isSelected: false,
        genre: 'pop',
        message: 'BRIGHT BLUE'
    },
    {
        id: 9,
        hex: '#9000FF',
        isSelected: false,
        genre: 'pop',
        message: 'VIOLET'
    },
    {
        id: 10,
        hex: '#BB75FC',
        isSelected: false,
        genre: 'pop',
        message: 'LILAC'
    },
    {
        id: 11,
        hex: '#A9677C',
        isSelected: false,
        genre: 'country',
        message: 'FLESH'
    },
    {
        id: 12,
        hex: '#B7468B',
        isSelected: false,
        genre: 'pop',
        message: 'ROSE'
    },
];
const colorsReducer = (state = initialColors, action) => {
    switch (action.type) {
        case 'TOGGLE_COLOR':
            return state.map(color => {
                if (color.id === action.payload){
                    return { ...color, isSelected: !color.isSelected}
                } else {
                    return color
                }
            })
        case 'RESET_COLORS':
            return [...initialColors]
        default:
            return [...state];
    }


}

export default colorsReducer;