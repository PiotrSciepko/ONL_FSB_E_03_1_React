import React from "react";

export default class MagicBox extends React.Component {
    state = {
        color: "#000"
    };

    changeColor = () => this.setState({
        color: '#' + Math.floor(Math.random() * 16777215).toString(16)
    });

    render() {
        const style = {width: "200px", height: "200px", backgroundColor: this.state.color};
        return <div style={style} onMouseEnter={this.changeColor} onMouseLeave={this.changeColor}/>;
    };
};