const initialColors = [
    {
        id: 1,
        hex: '#AB0034',
        isSelected: false,
        genre: 'romance',
        message: "DEEP RED: All of the color selections are Based on Alexander Scriabin's clavier à lumières; DEEP RED represents the romance genre."
    },
    {
        id: 2,
        hex: '#FF0000',
        isSelected: false,
        genre: 'punk-rock',
        message: "RED: All of the color selections are Based on Alexander Scriabin's clavier à lumières; RED represents the PUNK-ROCK genre."
    },
    {
        id: 3,
        hex: '#FF7F00',
        isSelected: false,
        genre: 'alternative',
        message: "ORANGE: All of the color selections are Based on Alexander Scriabin's clavier à lumières; ORANGE represents the ALTERNATIVE genre."
    },
    {
        id: 4,
        hex: '#FFFF00',
        isSelected: false,
        genre: 'dancehall',
        message: "YELLOW: All of the color selections are Based on Alexander Scriabin's clavier à lumières; YELLOW represents the DANCEHALL genre."
    },
    {
        id: 5,
        hex: '#33CC33',
        isSelected: false,
        genre: 'hardstyle',
        message: "GREEN: All of the color selections are Based on Alexander Scriabin's clavier à lumières; GREEN represents the HARDSTYLE genre."
    },
    {
        id: 6,
        hex: '#C3F2FF',
        isSelected: false,
        genre: 'electronic',
        message: "SKY BLUE: All of the color selections are Based on Alexander Scriabin's clavier à lumières; SKY BLUE represents the ELECTRONIC genre."
    },
    {
        id: 7,
        hex: '#8EC9FF',
        isSelected: false,
        genre: 'sad',
        message: "BLUE: All of the color selections are Based on Alexander Scriabin's clavier à lumières; BLUE represents the SAD genre."
    },
    {
        id: 8,
        hex: '#7F8BFD',
        isSelected: false,
        genre: 'dance',
        message: "BRIGHT BLUE: All of the color selections are Based on Alexander Scriabin's clavier à lumières; BRIGHT BLUE represents the DANCE genre."
    },
    {
        id: 9,
        hex: '#9000FF',
        isSelected: false,
        genre: 'r-n-b',
        message: "VIOLET: All of the color selections are Based on Alexander Scriabin's clavier à lumières; VIOLET represents the R&B genre."
    },
    {
        id: 10,
        hex: '#BB75FC',
        isSelected: false,
        genre: 'hip-hop',
        message: "LILAC: All of the color selections are Based on Alexander Scriabin's clavier à lumières; LILAC represents the HIP-HOP genre."
    },
    {
        id: 11,
        hex: '#A9677C',
        isSelected: false,
        genre: 'country',
        message: "FLESH: All of the color selections are Based on Alexander Scriabin's clavier à lumières; FLESH represents the COUNTRY genre."
    },
    {
        id: 12,
        hex: '#B7468B',
        isSelected: false,
        genre: 'pop',
        message: "ROSE: All of the color selections are Based on Alexander Scriabin's clavier à lumières; ROSE represents the POP genre."
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