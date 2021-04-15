import React from "react";

const SecretStuff = ({password, correctPassword, secret}) => {

    return password === correctPassword && <div>{secret}</div>;
}

export default SecretStuff;