import React, {Component} from 'react';

class StrobeLight extends Component {
    state = {color: "white"};

    componentDidMount() {
        this.interval = setInterval(() =>
                this.state.color === "white" ? this.setState({color: this.props.color}) : this.setState({color: "white"})
            , this.props.frequency);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div style={{width: "500px", height: "50px", backgroundColor: this.state.color}}/>
        );
    }
}

export default StrobeLight;