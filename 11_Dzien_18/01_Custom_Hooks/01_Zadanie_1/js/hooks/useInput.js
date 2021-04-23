import React, {useState} from 'react';

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    return [
        value, {value: value, hidden: false, onChange: e => setValue(e.target.value)}
    ];
};

export default useInput;