import React, {Component} from "react";
import ReactDOM from "react-dom";

const Header = ({logo, searchPlaceholder}) => {
    return (
        <header>
            <a href="#">{logo}</a>
            <form>
                <input placeholder={searchPlaceholder} name="s"/>
                <button>Search</button>
            </form>
        </header>
    )
}

const App = () => <Header logo="Your company!" searchPlaceholder="Type some words..."/>;


ReactDOM.render(<App/>, document.getElementById("app"));

