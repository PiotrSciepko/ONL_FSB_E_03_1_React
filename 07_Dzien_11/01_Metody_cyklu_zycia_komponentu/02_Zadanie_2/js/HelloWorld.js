import React, {Component} from "react";

export default class HelloWorld extends Component {
    state = {hello: "Hello World!"};

    componentDidMount() {
        console.log("komponent zamontowany");
        this.timeout = setTimeout(() => this.setState({hello: "Hi, Everyone!"}), 5000);
    }

    componentWillUnmount() {
        console.log("komponent odmontowywany");
        clearTimeout(this.timeout);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("komponent zaktualizowany");
    }

    render() {
        console.log("renderowanie");
        return <h1>{this.state.hello}</h1>;
    }

}