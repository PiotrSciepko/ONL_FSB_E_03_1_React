import React, {Component} from "react";
import ReactDOM from "react-dom";
import {HashRouter, Link, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Pricing from "./Pricing";
import Blog from "./Blog";
import NotFound from "./NotFound";

const App = () => (
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
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/blog"}>Blog</Link></li>
                <li><Link to={"/pricing"}>Pricing</Link></li>
            </ul>
        </HashRouter>
    </div>
)


ReactDOM.render(<App/>, document.getElementById("app"));
