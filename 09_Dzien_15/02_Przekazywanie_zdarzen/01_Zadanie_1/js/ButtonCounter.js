import React, {useState} from 'react';
import ButtonToClick from "./ButtonToClick";

const ButtonCounter = () => {
    const [clicks, setClicks] = useState(0);

    const clickHandler = () => setClicks(prev => prev + 1)

    return (
        <div>
            <h1>{clicks}</h1>
            <ButtonToClick onClick={clickHandler}>Click 1</ButtonToClick>
            <ButtonToClick onClick={clickHandler}>Click 2</ButtonToClick>
        </div>
    );
};

export default ButtonCounter;