import React, {Component} from "react";
import ReactDOM from "react-dom";
import NumberInfo from "./NumberInfo";

const App = () => <NumberInfo number={16}/>


ReactDOM.render(<App/>, document.getElementById("app"));
