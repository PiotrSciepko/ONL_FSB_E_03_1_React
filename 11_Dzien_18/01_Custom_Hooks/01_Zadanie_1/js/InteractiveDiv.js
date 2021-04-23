import React, {useState} from 'react';
import useInput from "./hooks/useInput";

const InteractiveDiv = () => {
    const [divWidth, connectDivWidth] = useInput(20);
    return (
        <div>
            <div style={{width: `${divWidth}px`, height: "100px", backgroundColor: "red"}}/>
            <input type={"number"} {...connectDivWidth}/>
        </div>
    );
};

export default InteractiveDiv;