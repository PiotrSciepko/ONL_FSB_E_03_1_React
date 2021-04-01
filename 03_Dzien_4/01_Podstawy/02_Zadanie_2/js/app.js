import React, {Component} from "react";
import ReactDOM from "react-dom";

const LikeBox = () => {
    return (
        <div style={{textAlign: "center"}}>
            <span>100 likes</span><br/>
            <button>Lubię to!</button>
        </div>
    )
}

ReactDOM.render(
    <LikeBox/>,
    document.getElementById("app")
);
