import React, {Component} from "react";
import ReactDOM from "react-dom";

const Sum = (props) => <h1>{props.numbers.reduce((a, b) => a + b)}</h1>;

ReactDOM.render(
    <Sum numbers={[1, 2, 3, 4, 5]}/>,
    document.getElementById("app")
);
