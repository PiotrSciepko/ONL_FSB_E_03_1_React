import React, {Component} from "react";
import ReactDOM from "react-dom";

const LikeBox = (props) => {
    return (
        <div style={{textAlign: "center"}}>
            <span>{props.initialNumber} likes</span><br/>
            <button>Lubię to!</button>
        </div>
    )
}

ReactDOM.render(
    <LikeBox initialNumber={101}/>,
    document.getElementById("app")
);
