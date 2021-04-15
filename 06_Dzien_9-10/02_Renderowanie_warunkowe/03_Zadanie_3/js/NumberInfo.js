import React from "react";

const NumberInfo = (props) => {

    const isPrime = (num) => {
        if (num === 1) {
            return false;
        } else if (num === 2) {
            return true;
        } else {
            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        }
    }

    const isPowerOf2 = (num) => Math.log2(num) % 1 === 0;

    return (
        <ul>
            <li>{props.number}</li>
            <li>{props.number % 2 === 0 ? "Parzysta" : "Nieparzysta"}</li>
            {isPrime(props.number) && <li>Liczba pierwsza</li>}
            {isPowerOf2(props.number) && <li>Potęga liczby 2</li>}
        </ul>
    )
}

export default NumberInfo;