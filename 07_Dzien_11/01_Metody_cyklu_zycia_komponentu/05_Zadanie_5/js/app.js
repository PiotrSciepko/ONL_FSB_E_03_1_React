import React, {Component} from "react";
import ReactDOM from "react-dom";
import StrobeLight from "./StrobeLight";

const App = () => <StrobeLight color={"red"} frequency={5}/>;


ReactDOM.render(<App/>, document.getElementById("app"));
