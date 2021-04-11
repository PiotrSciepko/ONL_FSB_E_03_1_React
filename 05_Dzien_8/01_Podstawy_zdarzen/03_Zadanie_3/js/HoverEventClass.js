import React from "react";

class HoverEventClass extends React.Component {

    onEnter = () => console.log("Najechano na przycisk!");
    onLeave = () => console.log("Odjechano z przycisku!");

    render() {
        return <button onMouseEnter={this.onEnter} onMouseLeave={this.onLeave}>Hover</button>;
    }
}

export default HoverEventClass;