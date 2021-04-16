import React from 'react';

const ClockDate = (props) => (
    <h1>{props.date.toLocaleTimeString()}</h1>
);

export default ClockDate;