import React from "react";
import ReactDOM from "react-dom";
import people from "./data/people";

ReactDOM.render(
    <>
        {people.map(el => <div key={el.id}>{el.name} {el.surname}</div>)}
    </>
    ,
    document.getElementById("app")
);
