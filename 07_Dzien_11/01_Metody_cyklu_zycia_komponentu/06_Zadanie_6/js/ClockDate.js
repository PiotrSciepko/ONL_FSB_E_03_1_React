import React, {Component} from 'react';

class ClockDate extends Component {

    render() {
        return <h1>{this.props.date.toLocaleDateString()}</h1>
    }
}

export default ClockDate;