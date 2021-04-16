import React, {useEffect, useState} from 'react';

function Box(props) {
    const [color, setColor] = useState("cornflowerblue")

    useEffect(() => {
        const timer = setTimeout(() => setColor("tomato"), 2000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <div style={{width: "100px", height: "100px", backgroundColor: color}}/>
    );
}

export default Box;