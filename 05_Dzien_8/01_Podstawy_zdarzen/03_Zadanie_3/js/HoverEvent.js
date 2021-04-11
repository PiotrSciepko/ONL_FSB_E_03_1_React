import React from "react";

const HoverEvent = () => {

    const onEnter = () => console.log("Najechano na przycisk!");
    const onLeave = () => console.log("Odjechano z przycisku!");

    return <button onMouseEnter={onEnter} onMouseLeave={onLeave}>Hover</button>;
}

export default HoverEvent;