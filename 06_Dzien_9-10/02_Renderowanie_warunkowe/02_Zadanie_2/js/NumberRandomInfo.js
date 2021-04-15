import React from "react";

export default class NumberRandomInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {num: 0}
        setInterval(() => this.setState({num: Math.ceil(Math.random() * 5)}), 1000);
    }

    render() {
        let randomInfo = "3";
        if (this.state.num > 3) {
            randomInfo = this.state.num + "  -> większa od 3"
        } else if (this.state.num < 3) {
            randomInfo = this.state.num + "  -> mniejsza od 3"
        }
        return <h1>{randomInfo}</h1>
    }

}

