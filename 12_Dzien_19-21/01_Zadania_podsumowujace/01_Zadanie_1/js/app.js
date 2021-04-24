import React, {Component} from "react";
import ReactDOM from "react-dom";
import WhoIsPresent from "./WhoIsPresent";

ReactDOM.render(
    <WhoIsPresent persons={['Anna Kowalska', 'Jan Kowalski', 'Maciej von Handerburg', 'Jurand ze Spychowa']}/>,
    document.getElementById("app")
);
