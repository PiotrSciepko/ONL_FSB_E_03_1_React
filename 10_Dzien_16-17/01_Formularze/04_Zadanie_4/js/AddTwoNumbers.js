import React, {useEffect, useState} from 'react';

const AddTwoNumbers = () => {
    const [numbers, setNumbers] = useState({num1: '', num2: ''});

    const handleNumbers = e => {
        const {name, value} = e.target;
        setNumbers(prev => ({...prev, [name]: value}));
    }

    const sum = +numbers.num1 + +numbers.num2;

    return (
        <div>
            <form>
                {!isNaN(sum) ? <h1>{sum}</h1> : <h1>Podaj dwie liczby</h1>}
                <input type={"text"} name={"num1"} value={numbers.num1} onChange={handleNumbers}/>
                <input type={"text"} name={"num2"} value={numbers.num2} onChange={handleNumbers}/>
            </form>
        </div>
    );
};

export default AddTwoNumbers;