const initialColors = [
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
        default:
            return [...state];
    }


}

export default colorsReducer;