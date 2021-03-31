import React from "react";
import ReactDOM from "react-dom";

const Calc = () => {
    const a = parseFloat(prompt("Podaj pierwszą liczbę"));
    const sign = prompt("Podaj działanie");
    const b = parseFloat(prompt("Podaj drugą liczbę"));
    switch (sign) {
        case "+":
            return <h1>{a + b}</h1>;
        case "-":
            return <h2>{a - b}</h2>;
        case "*":
            return <h3>{a * b}</h3>;
        case "/":
            return <h4>{a / b}</h4>;
    }
}

ReactDOM.render(
    <Calc />,
    document.getElementById("app")
);
