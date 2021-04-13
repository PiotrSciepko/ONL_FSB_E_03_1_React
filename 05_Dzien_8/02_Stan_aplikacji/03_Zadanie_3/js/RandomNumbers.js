import React from "react";

export default class RandomNumbers extends React.Component {
    state = {
        numbers: []
    };

    randomNumber = () => this.setState(prevState =>
        ({numbers: [...prevState.numbers, Math.floor(Math.random() * 900) + 100]}))

    render() {
        return (
            <>
                <button onClick={this.randomNumber}>Wylosuj liczbę</button>
                <ul>
                    {this.state.numbers.map((number, index) => <li key={index}>{number}</li>)}
                </ul>
            </>
        )
    }
}