import React from 'react';

const PassParameter = () => {

    const handleClickButton = (event, s) => {
        event.preventDefault();
        console.log(s);
    }

    return (
        <div>
            <a href="#" onClick={(event) => handleClickButton(event, "Dowolny string")}>Klik</a>
        </div>
    );
};

export default PassParameter;