import React, {Component} from "react";
import ReactDOM from "react-dom";
import TextTyper from "./TextTyper";

function App() {
    return <TextTyper text={"Hello World!"}/>
}

ReactDOM.render(<App/>, document.getElementById("app"));
