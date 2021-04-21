import React, {useEffect, useState} from "react";

const SpeedClickGame1 = (props) => {
    const [time, setTime] = useState(props.time);
    const [points, setPoints] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    const [currentTime, setCurrentTime] = useState(time);

    useEffect(() => {
            const timer = setInterval(() => {
                setCurrentTime(prev => prev - 50 > 0 ? prev - 50 : setIsDisabled(true));
            }, 50);
            return () => clearInterval(timer);
        }, []
    );

    const click = () => {
        setPoints(prev => prev + 1);
        setTime(prev => prev - 50);
        setCurrentTime(time);
    }

    return <div>
        <button onClick={click} disabled={isDisabled}>Click me!</button>
        <h1>{currentTime}</h1>
        <h2>{points}</h2>
    </div>
}

export default SpeedClickGame1;