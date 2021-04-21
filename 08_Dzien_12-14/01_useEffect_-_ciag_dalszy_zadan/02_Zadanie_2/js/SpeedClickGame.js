import React, {useEffect, useState} from "react";

const SpeedClickGame = (props) => {
    const [time, setTime] = useState(props.time);
    const [points, setPoints] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    const [currentTime, setCurrentTime] = useState(props.time);

    useEffect(() => {
            const timeout = setTimeout(() => {
                if (currentTime > 0) {
                    setCurrentTime(prev => prev - 50);
                    console.log(currentTime)
                } else {
                    setIsDisabled(true);
                }
            }, 50);
            return () => clearTimeout(timeout);
        }, [currentTime]
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

export default SpeedClickGame;