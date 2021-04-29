import React, {Component} from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route} from "react-router-dom";
import Main from "./Main";
import AboutUs from "./AboutUs";
import AboutCompany from "./AboutCompany";

const App = () => (
    <div>
        <h1>Aplikacja React z React Router</h1>
        <HashRouter>
            <Route exact path={'/'} component={Main}/>
            <h2>
                <Route path={'/about/us'} component={AboutUs}/>
                <Route path={'/about/company'} component={AboutCompany}/>
            </h2>

        </HashRouter>
    </div>
)


ReactDOM.render(<App/>, document.getElementById("app"));
