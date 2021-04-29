import React, {Component} from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route} from "react-router-dom";
import HelloYou from "./HelloYou";
import CheckAge from "./CheckAge";
import Main from "./Main";

const App = () => (
    <div>
        <h1>React Router App</h1>
        <HashRouter>
            <Route exact path={"/"} component={Main}/>
            <Route path={"/hello/:name"} component={HelloYou}/>
            <Route path={"/check/:age"} component={CheckAge}/>
        </HashRouter>
    </div>
)


ReactDOM.render(<App/>, document.getElementById("app"));
