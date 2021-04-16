import React, {useEffect, useState} from 'react';

function CustomTitle() {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        document.title = `${counter}`
    }, [counter])

    const handleClick = () => {
        setCounter(prev => prev + 1);
    }

    return (
        <p style={{fontSize: `${counter * 1.2}rem`}} onClick={handleClick}>Kliknięto mnie już {counter} razy</p>
    );
}

export default CustomTitle;
