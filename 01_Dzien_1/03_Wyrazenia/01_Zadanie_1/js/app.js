import React from "react";
import ReactDOM from "react-dom";

const a = parseFloat(prompt("Podaj liczbę A"));
const b = parseFloat(prompt("Podaj liczbę B"));

ReactDOM.render(
    <div>{a+b}</div>,
    document.getElementById("app")
);