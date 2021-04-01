import React, {Component} from "react";
import ReactDOM from "react-dom";

class Menu extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => <li><a href={item.url}>{item.text}</a></li>)}
            </ul>
        )
    }
}

const menuItems = [
    {
        url: "/",
        text: "Strona główna"
    },
    {
        url: "/blog",
        text: "Blog"
    },
    {
        url: "/cennik",
        text: "Cennik"
    },
    {
        url: "/kontakt",
        text: "Kontakt"
    }
]


ReactDOM.render(
    <Menu items={menuItems}/>,
    document.getElementById("app")
);
