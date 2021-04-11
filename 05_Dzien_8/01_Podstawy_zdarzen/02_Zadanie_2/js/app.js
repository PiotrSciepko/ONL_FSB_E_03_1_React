import React, {Component} from "react";
import ReactDOM from "react-dom";
import ShowUserFunc from "./ShowUserFunc";
import ShowUserClass from "./ShowUserClass";

const App = () => {
    return (
        <>
            <ShowUserFunc name={"Jan"} surname={"Funkcyjny"}/>
            <ShowUserClass name={"Jan"} surname={"Klasowy"}/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));
