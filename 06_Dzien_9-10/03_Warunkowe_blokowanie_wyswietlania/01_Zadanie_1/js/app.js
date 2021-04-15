import React, {Component} from "react";
import ReactDOM from "react-dom";
import SecretStuff from "./SecretStuff";

const App = () => <SecretStuff password={"TajneHasło"} correctPassword={"TajneHasło"}
                               secret={"Tajne hasło wprowadzono poprawnie"}/>


ReactDOM.render(<App/>, document.getElementById("app"));
