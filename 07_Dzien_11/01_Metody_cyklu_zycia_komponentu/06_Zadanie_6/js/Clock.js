import React, {Component} from 'react';
import ClockDate from "./ClockDate";
import ClockTime from "./ClockTime";

class Clock extends Component {
    state = {date: new Date()};

    componentDidMount() {
        this.interval = setInterval(() => this.setState({date: new Date()}), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <>
                {this.state.date.toString()}
                <ClockTime date={this.state.date}/>
                <ClockDate date={this.state.date}/>
            </>
        );
    }
}

export default Clock;