import React, {useState} from "react";

const CountThings = () => {
    const [account, setAccount] = useState(10000);
    const [age, setAge] = useState(50);

    const addMoney = () => setAccount(prev => prev + 1000);
    const incAge = () => setAge(prev => prev + 1);

    return (
        <>
            <div>
                <p>💰 so much money: {account}</p>
                <p>Age: {age}</p>
            </div>
            <button onClick={addMoney}>Get rich!</button>
            <button onClick={incAge}>Get older :(</button>
        </>
    )
}

export default CountThings;