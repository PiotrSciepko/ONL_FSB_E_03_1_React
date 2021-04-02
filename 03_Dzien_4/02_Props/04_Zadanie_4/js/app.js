import React, {Component} from "react";
import ReactDOM from "react-dom";

const LikeBox = ({initialNumber = 102}) => {
    return (
        <div style={{textAlign: "center"}}>
            <span>{initialNumber} likes</span><br/>
            <button>Lubię to!</button>
        </div>
    )
}

ReactDOM.render(
    <LikeBox/>,
    document.getElementById("app")
);
