import React from 'react';
import './../App.css';
import colorPalette from './colorCodes';

const ColorCircle = ({color}) => {
    const style = {
        backgroundColor: colorPalette[color]
    }

    return (
        <span style={style} class="color-circle"></span>
    );
};

export default ColorCircle;