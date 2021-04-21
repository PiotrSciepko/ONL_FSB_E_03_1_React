import React, {useState} from 'react';

const CrazyDiv = () => {
    const [style, setStyle] = useState({width: "100px", height: "100px", position: "absolute", backgroundColor: "red"})

    const handleHover = (left, top) => {
        setStyle(prev => ({...prev, left: left, top: top}))
    }

    return (
        <div onMouseEnter={() => handleHover(Math.floor(Math.random() * (800)), Math.floor(Math.random() * (800)))}
             style={style}>

        </div>
    );
};

export default CrazyDiv;