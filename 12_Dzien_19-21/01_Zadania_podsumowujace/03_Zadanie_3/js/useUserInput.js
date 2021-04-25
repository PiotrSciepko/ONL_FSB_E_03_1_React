import React, {useState} from 'react';

const useUserInput = () => {
    const [value, setValue] = useState({});

    const handleInput = e => {
        const {name, value} = e.target;
        setValue(prev => ({...prev, [name]: value}))
    }

    return [
        value,
        {
            value: value["name"],
            onChange: handleInput
        }
    ]

};

export default useUserInput;