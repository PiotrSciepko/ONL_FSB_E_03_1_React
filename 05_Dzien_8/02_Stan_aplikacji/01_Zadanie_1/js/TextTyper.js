import React from "react";

export default class TextTyper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
    }

    increaseCounter = () => {
        this.setState((prevState, props) => {
            if (prevState.counter < props.text.length) {
                return {
                    counter: ++prevState.counter
                }
            }
        })
    }

    decreaseCounter = () => {
        this.setState((prevState, props) => {
            if (prevState.counter > 1) {
                return {
                    counter: --prevState.counter
                }
            }
        })
    }

    render() {
        return (
            <>
                <h1>{this.props.text.substring(0, this.state.counter)}</h1>
                <button style={{width: "50px"}} onClick={this.increaseCounter}>+</button>
                <button style={{width: "50px"}} onClick={this.decreaseCounter}>-</button>
            </>
        )
    }
}