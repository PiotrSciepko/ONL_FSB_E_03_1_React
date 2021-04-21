import React from 'react';

const ButtonToClick = ({onClick, children}) => {
    return (
        <button onClick={onClick}>{children}</button>
    );
};

export default ButtonToClick;