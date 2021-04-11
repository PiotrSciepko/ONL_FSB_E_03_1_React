import React from "react";

const onClick = () => console.log("Kliknięto na div!");
const onEnter = () => console.log("Wjechano na div!");
const onLeave = () => console.log("Wyjechano z diva!");

const EventsTest = () => {
    return (
        <div style={{width: "100px", height: "100px", backgroundColor: "red"}} onClick={onClick} onMouseEnter={onEnter}
             onMouseLeave={onLeave}>
        </div>
    )
}

export default EventsTest;