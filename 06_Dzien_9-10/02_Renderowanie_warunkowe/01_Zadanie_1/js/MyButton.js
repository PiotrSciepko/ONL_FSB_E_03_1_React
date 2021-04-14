import React from "react";

const MyButton = () => {
    const [message, setMessage] = React.useState("NIE");

    return <button onClick={() => message === "NIE" ? setMessage("TAK") : setMessage("NIE")}>{message}</button>
}

export default MyButton;