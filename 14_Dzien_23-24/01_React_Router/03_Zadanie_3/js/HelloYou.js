import React from 'react';
import {HashRouter, NavLink} from "react-router-dom";

const HelloYou = (props) => {
    const activeStyle = {fontWeight: "bold"};

    return (
        <div>
            <h1>Witaj {props.match.params.name}</h1>
            <HashRouter>
                <ul>
                    <li><NavLink exact to={"/"} activeStyle={activeStyle}>Main</NavLink></li>
                    <li><NavLink to={"/hello/Jan"} activeStyle={activeStyle}>Hello Jan</NavLink></li>
                    <li><NavLink to={"/check/22"} activeStyle={activeStyle}>Check 22</NavLink></li>
                </ul>
            </HashRouter>
        </div>
    )
}

export default HelloYou;