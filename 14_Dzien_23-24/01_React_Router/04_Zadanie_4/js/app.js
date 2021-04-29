import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Link, NavLink, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Pricing from "./Pricing";
import Blog from "./Blog";
import NotFound from "./NotFound";

const App = () => {
    const activeStyle = {border: "3px solid green"};
    return (
        <div>
            <h1>Aplikacja React z React Router</h1>
            <HashRouter>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/blog"} component={Blog}/>
                    <Route path={"/pricing"} component={Pricing}/>
                    <Route component={NotFound}/>
                </Switch>
                <ul>
                    <li><NavLink exact to={"/"} activeStyle={activeStyle}>Home</NavLink></li>
                    <li><NavLink to={"/blog"} activeStyle={activeStyle}>Blog</NavLink></li>
                    <li><NavLink to={"/pricing"} activeStyle={activeStyle}>Pricing</NavLink></li>
                </ul>
            </HashRouter>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));
