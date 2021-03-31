import React from "react";
import ReactDOM from "react-dom";

function genNumber() {
    return Math.round(Math.random() * 9 + 1);
}

function checkResult() {
    const a = genNumber();
    const b = genNumber();
    const result = parseFloat(prompt(a + " + " + b + " ="));
    if (result === a + b) {
        return <div style={{backgroundColor:"green"}}>Odpowiedź poprawna</div>
    } else {
        return <div style={{backgroundColor:"red"}}>Odpowiedź błędna</div>
    }
}

ReactDOM.render(
    checkResult(),
    document.getElementById("app")
);
