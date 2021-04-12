import React from "react";

export default class TextTyper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
            text: this.props.text
        };
    }


    increaseCounter = () => {
        this.setState(prevState => {
            if (prevState.counter < prevState.text.length) {
                return {
                    counter: prevState.counter + 1
                }
            }
        })
    }

    decreaseCounter = () => {
        this.setState(prevState => {
            if (prevState.counter > 1) {
                return {
                    counter: prevState.counter - 1
                }
            }
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.text.substring(0, this.state.counter)}</h1>
                <button style={{width: "50px"}} onClick={this.increaseCounter}>+</button>
                <button style={{width: "50px"}} onClick={this.decreaseCounter}>-</button>
            </>
        )
    }
}