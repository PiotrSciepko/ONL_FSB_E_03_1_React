import React from "react";
import ReactDOM from "react-dom";
import people from "./data/people";

ReactDOM.render(
    <>
        {people.map(el =>
            <div className={"person"} key={el.id}>
                <img src={el.avatar}/>
                <div className={"info"}>
                    <h1>{el.title} {el.name} {el.surname}</h1>
                    <p>{el.bio}</p>
                </div>
            </div>)}
    </>
    ,
    document.getElementById("app")
);
