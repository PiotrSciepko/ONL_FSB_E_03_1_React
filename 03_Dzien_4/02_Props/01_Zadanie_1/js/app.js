import React, {Component} from "react";
import ReactDOM from "react-dom";

const Hello = (props) => {
    return (
        <h1>{props.name} {props.surname}</h1>
    )
}

class Hello1 extends Component {
    render(props) {
        return (
            <h1>{this.props.name} {this.props.surname}</h1>
        )
    }
}

ReactDOM.render(
    <div>
        <Hello name="Piotr" surname="Ściepko"/>
        <Hello1 name="Piotr" surname="Ściepko"/>
    </div>
    ,
    document.getElementById("app")
);


