import React, {Component} from "react";

export default class Modal extends Component {
    state = {modalOpen: false};

    componentDidMount() {
        this.timer = setTimeout(() => this.setState({modalOpen: true}), 10000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        return this.state.modalOpen && <h2>{this.props.heading}</h2>;
    }
}