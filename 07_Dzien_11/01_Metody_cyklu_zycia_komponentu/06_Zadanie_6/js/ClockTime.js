import React, {Component} from 'react';

class ClockTime extends Component {

    render() {
        return <h1>{this.props.date.toLocaleTimeString()}</h1>
    }
}

export default ClockTime;