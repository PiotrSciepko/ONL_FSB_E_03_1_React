import React, {useState} from "react";

const Numbers = () => {
    const nums = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40];
    const [numbers, setNumbers] = useState(nums);

    const showEven = () => setNumbers(nums.filter(number => number % 2 === 0))
    const showOdd = () => setNumbers(nums.filter(number => number % 2 !== 0))
    const showAll = () => setNumbers(nums);

    return (
        <>
            <button onClick={showEven}>Pokaż tylko parzyste</button>
            <button onClick={showOdd}>Pokaż tylko nieparzyste</button>
            <button onClick={showAll}>Pokaż wszystkie</button>
            <ul>
                {numbers.map(number => <li>{number}</li>)}
            </ul>
        </>
    )
}

export default Numbers;