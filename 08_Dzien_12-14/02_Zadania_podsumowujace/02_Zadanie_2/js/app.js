import React, {Component} from "react";
import ReactDOM from "react-dom";
import MathQuestionGame from "./MathQuestionGame";

const App = ()=><MathQuestionGame/>


ReactDOM.render(
  <App/>,
  document.getElementById("app")
);
