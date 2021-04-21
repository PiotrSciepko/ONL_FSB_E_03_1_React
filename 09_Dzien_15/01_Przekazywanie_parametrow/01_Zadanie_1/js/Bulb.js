import React, {useState} from 'react';

const Bulb = () => {
    const [color, setColor] = useState("white");
    const [label, setLabel] = useState("On");

    const handleClick = () => {
        setColor(prev => prev === "white" ? "yellow" : "white");
        setLabel(prev => prev === "On" ? "Off" : "On")
    }
    return (
        <div onClick={handleClick} style={{backgroundColor: color, width: "100px", height: "100px"}}>
            <button>{label}</button>
        </div>
    );
};

export default Bulb;