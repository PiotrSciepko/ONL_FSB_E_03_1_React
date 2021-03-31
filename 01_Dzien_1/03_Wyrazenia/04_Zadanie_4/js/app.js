import React from "react";
import ReactDOM from "react-dom";

const a = parseFloat(prompt("Podaj pierwszą liczbę"));
const sign = prompt("Podaj pierwszą liczbę");
const b = parseFloat(prompt("Podaj pierwszą liczbę"));
let result;
switch (sign) {
    case "+":
        result = <h1>{a + b}</h1>;
        break;
    case "-":
        result = <h2>{a - b}</h2>;
        break;
    case "*":
        result = <h3>{a * b}</h3>;
        break;
    case "/":
        result = <h4>{a / b}</h4>;
        break;
}
ReactDOM.render(
    result,
    document.getElementById("app")
);
