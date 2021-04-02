import React, {Component} from "react";
import ReactDOM from "react-dom";

const Hello = ({name, surname}) => <h1>{name} {surname}</h1>

class Hello1 extends Component {
    render() {
        return (
            <h1>{this.props.name} {this.props.surname}</h1>
        )
    }
}


ReactDOM.render(
    <>
        <Hello name="Piotr" surname="Ściepko"/>
        <Hello1 name="Piotr" surname="Ściepko"/>
    </>
    ,
    document.getElementById("app")
);


