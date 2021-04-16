import React, {Component} from "react";

export default class Box extends Component {
    state = {color: "green"}

    componentDidMount() {
        this.interval = setInterval(() =>
                this.state.color === "green" ? this.setState({color: "red"}) : this.setState({color: "green"})
            , 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <div style={{width: "200px", height: "200px", backgroundColor: this.state.color}}/>
    }

}