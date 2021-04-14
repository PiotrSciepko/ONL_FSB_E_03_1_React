import React, {useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(10);

    const increaseCounter = () => setCounter(prev => prev + 1);
    const decreaseCounter = () => setCounter(prev => prev - 1);
    const resetCounter = () => setCounter(10);

    return (
        <>
            <h1>Liczba kliknięć: {counter}</h1>
            <button style={{width: "40px"}} onClick={increaseCounter}>+</button>
            <button style={{width: "40px"}} onClick={decreaseCounter}>-</button>
            <button onClick={resetCounter}>Reset</button>
        </>

    )
}

export default Counter;