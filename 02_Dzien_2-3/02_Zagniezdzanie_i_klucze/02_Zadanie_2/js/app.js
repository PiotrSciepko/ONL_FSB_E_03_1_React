import React from "react";
import ReactDOM from "react-dom";
import person from "./data/person";


ReactDOM.render(
    <>
        <h1>{person.title} {person.firstName} {person.lastName}</h1>
        <span>{person.age}</span>
    </>
    ,
    document.getElementById("app")
);
