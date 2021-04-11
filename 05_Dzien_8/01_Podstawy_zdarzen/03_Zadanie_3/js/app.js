import React, {Component} from "react";
import ReactDOM from "react-dom";
import HoverEvent from "./HoverEvent";
import HoverEventClass from "./HoverEventClass";

const App = () => {
    return (
        <>
            <HoverEvent/>
            <HoverEventClass/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));
