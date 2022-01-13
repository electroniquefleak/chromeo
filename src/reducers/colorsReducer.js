const initialColors = [
    {
        id: 1,
        hex: '#FF0000',
        isSelected: false,
        genre: 'classical',
        message: 'Message goes here'
    },
    {
        id: 2,
        hex: '#E67E22',
        isSelected: false,
        genre: 'country',
        message: 'Message goes here'
    },
    {
        id: 3,
        hex: '#F4D03F',
        isSelected: false,
        genre: 'rock',
        message: 'Message goes here'
    },
    {
        id: 4,
        hex: '#28B463',
        isSelected: false,
        genre: 'pop',
        message: 'Message goes here'
    },
    {
        id: 5,
        hex: '#DDF0F3',
        isSelected: false,
        genre: 'hip-hop',
        message: 'Message goes here'
    },
    {
        id: 6,
        hex: '#D4E6F1',
        isSelected: false,
        genre: 'pop',
        message: 'Message goes here'
    },
    {
        id: 7,
        hex: '#898DFC',
        isSelected: false,
        genre: 'pop',
        message: 'Message goes here'
    },
    {
        id: 8,
        hex: '#9152FF',
        isSelected: false,
        genre: 'pop',
        message: 'Message goes here'
    },
    {
        id: 9,
        hex: '#EAA4FF',
        isSelected: false,
        genre: 'pop',
        message: 'Message goes here'
    },
    {
        id: 10,
        hex: '#E95793',
        isSelected: false,
        genre: 'pop',
        message: 'Message goes here'
    },
    {
        id: 11,
        hex: '#C48787',
        isSelected: false,
        genre: 'country',
        message: 'Message goes here'
    },
    {
        id: 12,
        hex: '#CF223C',
        isSelected: false,
        genre: 'pop',
        message: 'Message goes here'
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
            return initialColors
        default:
            return [...state];
    }


}

export default colorsReducer;