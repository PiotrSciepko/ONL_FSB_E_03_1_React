import React from "react";

const UpperLower = () => {
    const [message, setMessage] = React.useState("Hello World!");

    const upperCase = () => setMessage(message.toUpperCase());
    const lowerCase = () => setMessage(message.toLowerCase());

    return (
        <>
            <h2>{message}</h2>
            <button onClick={upperCase}>Uppercase</button>
            <button onClick={lowerCase}>Lowercase</button>
        </>
    )
}

export default UpperLower;