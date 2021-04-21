import React, {Component} from "react";
import ReactDOM from "react-dom";
import MobileMenu from "./MobileMenu";

const App = () => <MobileMenu/>;


ReactDOM.render(
    <div className="iphone-x">
        <i/>
        <b/>
        <App/>
    </div>,
    document.getElementById("app")
);
