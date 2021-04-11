import React from "react";

export default class ShowUserClass extends React.Component {

    showName = () => {
        console.log(this.props.name, this.props.surname);
    }

    render() {
        return <button onClick={this.showName}>Dane użytkownika</button>
    }
}
