import React, {Component} from "react";

const Buttons = () => {

    const getPower = () => {
        const A = prompt("Podaj liczbę A");
        const B = prompt("Podaj liczbę B");
        console.log(A ** B)
    }

    return (
        <>
            <button onClick={() => console.log("Pierwszy przycisk kliknięty")}>Klik! 1</button>
            <button onClick={getPower}>Klik! 2</button>
            <button onClick={() => console.log(screen.width, screen.height)}>Klik! 3</button>
        </>

    )
}

export default Buttons;