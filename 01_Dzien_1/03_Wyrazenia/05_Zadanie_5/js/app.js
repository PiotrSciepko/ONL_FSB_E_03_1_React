import React from "react";
import ReactDOM from "react-dom";

const a = parseFloat(prompt("Podaj pierwszą liczbę"));
const sign = prompt("Podaj pierwszą liczbę");
const b = parseFloat(prompt("Podaj pierwszą liczbę"));

const calc = (a, b, sign) => {
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
    calc(a, b, sign),
    document.getElementById("app")
);
