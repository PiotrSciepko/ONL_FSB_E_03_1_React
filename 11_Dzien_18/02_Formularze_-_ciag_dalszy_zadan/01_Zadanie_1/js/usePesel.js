import React, {useState} from 'react';

const usePesel = () => {
    const [pesel, setPesel] = useState();
    const output = /^[0-9]{11}$/.test(pesel) ? <input type={"submit"} value={"Prześlij"}/> : "Niepoprawny numer pesel";

    return [
        <div>{output}</div>,
        {
            value: pesel,
            onChange: e => setPesel(e.target.value)
        }
    ];
};

export default usePesel;