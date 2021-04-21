import React, {useState} from 'react';

const Box = () => {
    const [style, setStyle] = useState({width: "500px", height: "200px", backgroundColor: "green"})

    const handler = (width, height, color) => setStyle({width: width, height: height, backgroundColor: color})

    return (
        <div style={style}>
            <button onClick={() => handler("200px", "300px", "orange")}>Orange</button>
            <button onClick={() => handler("100px", "700px", "blue")}>Blue</button>
            <button onClick={() => handler("500px", "200px", "green")}>Green</button>
        </div>

    );
};

export default Box;