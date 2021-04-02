import React, {Component} from "react";
import ReactDOM from "react-dom";

const AddNumbers = ({numberA, numberB}) => <h1>{numberA + numberB}</h1>;

const App = () => <AddNumbers numberA={4} numberB={8}/>;

class AddNumbers1 extends Component {
    render() {
        return <h1>{this.props.numberA + this.props.numberB}</h1>
    }
}

class App1 extends Component {
    render() {
        return <AddNumbers1 numberA={5} numberB={8}/>;
    }
}


ReactDOM.render(
    <>
        <App/>
        <App1/>
    </>
    , document.getElementById("app"));
