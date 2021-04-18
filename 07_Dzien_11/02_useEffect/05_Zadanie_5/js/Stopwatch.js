import React, {useEffect, useState} from 'react';

function Stopwatch(props) {
    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(0);
    const [laps, setLaps] = useState([]);
    const [switchIt, setSwitchIt] = useState(false);

    useEffect(() => {
        setIntervalId(() => setInterval(() => setTime(prev => prev + 1), 1000));
        return () => clearInterval(intervalId);
    }, [switchIt]);

    const lap = () => setLaps(prev => [...prev, time]);
    const stop = () => clearInterval(intervalId);
    const reset = () => {
        setTime(0);
        setLaps([]);
    }
    const start = () => {
        clearInterval(intervalId);
        setSwitchIt(prev => !prev);
    }

    return (
        <div>
            <h1>Time: {time}s</h1>
            <button onClick={lap}>Lap</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
            <button onClick={start}>Start</button>
            <h2>Laps:</h2>
            <ul>
                {laps.map(lap => <li>{lap}</li>)}
            </ul>
        </div>
    );
}

export default Stopwatch;