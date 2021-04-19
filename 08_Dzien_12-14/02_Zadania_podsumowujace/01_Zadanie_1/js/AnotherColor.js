import React, {useEffect, useState} from 'react';

function AnotherColor(props) {
    const [color, setColor] = useState("yellow");
    const [timerId, setTimerId] = useState();

    useEffect(() => {
        const timer = setTimeout(() => setColor("blue"), 5000);
        setTimerId(timer);
        return clearTimeout(timerId);
    }, [])

    return (
        <div style={{width: "200px", height: "200px", backgroundColor: color}}/>
    );
}

export default AnotherColor;