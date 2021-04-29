import React from 'react';
import {HashRouter, Link, NavLink} from "react-router-dom";

const CheckAge = (props) => {
    const activeStyle = {fontWeight: "bold"};
    return (
        <div>
            <h1>{props.match.params.age < 18 ? "Niepełnoletni" : "Pełnoletni"}</h1>
            <HashRouter>
                <ul>
                    <li><NavLink exact to={"/"} activeStyle={activeStyle}>Main</NavLink></li>
                    <li><NavLink to={"/hello/Jan"} activeStyle={activeStyle}>Hello Jan</NavLink></li>
                    <li><NavLink to={"/check/22"} activeStyle={activeStyle}>Check 22</NavLink></li>
                </ul>
            </HashRouter>
        </div>
    )
};

export default CheckAge;