import React, {Component} from "react";
import ReactDOM from "react-dom";

const ParentComponent = (props) => {
    return (
        <div>
            ParentComponent
            <ChildComponent>
                {props.children}
            </ChildComponent>
        </div>
    )
}

const ChildComponent = (props) => {
    return (
        <div>
            ChildComponent
            <GrandchildComponent>
                {props.children}
            </GrandchildComponent>
        </div>
    )
}

const GrandchildComponent = (props) => {
    return (
        <div>
            GrandchildComponent
            {props.children}
        </div>
    )
}


ReactDOM.render(
    <ParentComponent>
        <h1>To działa!</h1>
    </ParentComponent>
    ,
    document.getElementById("app")
);
