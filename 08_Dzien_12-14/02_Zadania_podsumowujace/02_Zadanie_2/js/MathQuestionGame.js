import React, {useEffect, useState} from 'react';

function MathQuestionGame(props) {
    const [message, setMessage] = useState('');
    const [result, setResult] = useState();
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [timerId, setTimerId] = useState();
    const [intervalId, setIntervalId] = useState();
    const [timeRemaining, setTimeRemaining] = useState(10);
    const [buttons, setButtons] = useState([]);

    useEffect(() => {
        const operations = ["+", "-", "*"];
        const num1 = Math.floor(Math.random() * (10 - 1) + 1);
        const num2 = Math.floor(Math.random() * (10 - 1) + 1);
        const operation = operations[Math.floor(Math.random() * operations.length)];
        setResult(evalResult(num1, num2, operation));
        setMessage(`${num1} ${operation} ${num2} =`);
    }, []);

    useEffect(() => setButtons(buttonLabels(result)), [result])

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage("Czas minął!");
            setIsButtonDisabled(true);
        }, timeRemaining * 1000);
        setTimerId(timer);
        return () => clearTimeout(timerId);
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(prev => prev - 1 > 0 ? prev - 1 : 0);
        }, 1000);
        setIntervalId(interval);
        return () => clearInterval(intervalId);
    }, [])

    const evalResult = (num1, num2, operation) => {
        switch (operation) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*" :
                return num1 * num2;
        }
    }

    const buttonLabels = (result) => {
        const labels = [result];
        let i = 0;
        while (i < 3) {
            const number = Math.floor(Math.random() * (100 - (-10)) + (-10));
            if (number !== result) {
                labels.push(number);
                i++;
            }
        }
        shuffle(labels);
        return labels;
    }

    const shuffle = (a) => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }

    const buttonHandler = (label) => {
        setIsButtonDisabled(true);
        clearTimeout(timerId);
        clearInterval(intervalId);
        setMessage(+label === result ? "Gratulacje!" : "Błędna odpowiedź :(")
    }

    return (
        <div>
            <h1>{message}</h1>
            {buttons.map((label, index) =>
                <button onClick={() => buttonHandler(label)} key={index} style={{width: "50px"}}
                        disabled={isButtonDisabled}>{label}</button>)}
            <h3 style={{paddingTop: "30px"}}>{timeRemaining} s</h3>
        </div>
    );
}

export default MathQuestionGame;