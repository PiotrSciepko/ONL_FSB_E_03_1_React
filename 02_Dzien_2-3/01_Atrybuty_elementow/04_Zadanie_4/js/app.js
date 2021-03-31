import React from "react";
import ReactDOM from "react-dom";

const colors = ["red", "green", "blue"];
const color = prompt("Podaj kolor ramki");
let result = <div>Nieprawidłowy kolor</div>;
if (colors.includes(color)) {
    result =
        <div style={{width: "100px", height: "100px", borderWidth: "5px", borderStyle: "solid", borderColor: color}}/>
}

ReactDOM.render(
    result,
    document.getElementById("app")
);
