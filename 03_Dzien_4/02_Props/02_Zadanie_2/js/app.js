import React, {Component} from "react";
import ReactDOM from "react-dom";

const AddNumbers = (props) => <h1>{props.numberA + props.numberB}</h1>;

class AddNumbers1 extends Component {
    render() {
        return <h1>{this.props.numberA + this.props.numberB}</h1>;
    }
}


ReactDOM.render(
    <>
        <AddNumbers numberA={2} numberB={5}/>
        <AddNumbers1 numberA={3} numberB={5}/>
    </>
    ,
    document.getElementById("app")
);
