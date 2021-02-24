import React from 'react';
import './../App.css';
import ColorCircle from './ColorCircle';
import colorPalette from './colorCodes';

const ColorPalette = () => {
    return (
        <div className='color-palette'>
            <div>Colors</div>
            <div>
                {Object.entries(colorPalette).map(([key]) => <ColorCircle color={key} />)}
            </div>
        </div>
    );
};

export default ColorPalette;