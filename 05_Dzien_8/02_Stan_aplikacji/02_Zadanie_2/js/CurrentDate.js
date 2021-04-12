import React from "react";

export default class CurrentDate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    };

    render() {
        const d = this.state.date;
        return (
            <>
                <h1>
                    {d.getHours()}:{d.getMinutes()}:{d.getSeconds()}, {d.getDate()}/{d.getMonth() + 1}/{d.getFullYear()}
                </h1>
                <br/>
                <button onClick={() => this.setState({date: new Date()})}>Zaktualizuj datę</button>
            </>
        )
    };
}