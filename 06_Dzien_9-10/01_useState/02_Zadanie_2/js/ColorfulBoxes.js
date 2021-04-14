import React, {useState} from "react";

const ColorfulBoxes = () => {
    const [colors, setColors] = useState([]);

    const addBox = () =>
        setColors(prev => [...prev, '#' + Math.floor(Math.random() * 16777215).toString(16)]);

    return <>
        <button onClick={addBox}>Dodaj boxa!</button>
        {colors.map((color, index) => {
                const style = {width: "200px", height: "200px", backgroundColor: color};
                return <div key={index} style={style}/>;
            }
        )}
    </>
}

export default ColorfulBoxes;