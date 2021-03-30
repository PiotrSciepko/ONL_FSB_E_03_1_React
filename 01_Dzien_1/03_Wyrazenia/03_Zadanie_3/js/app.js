import React from "react";
import ReactDOM from "react-dom";
import person from './data/person';

ReactDOM.render(
    <ul>
        {Object.values(person).map(el=><li>{el}</li>)}
    </ul>,
    document.getElementById("app")
);
