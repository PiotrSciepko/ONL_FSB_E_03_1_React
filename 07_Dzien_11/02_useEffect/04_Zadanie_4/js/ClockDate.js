import React from 'react';

const ClockDate = (props) => (
    <h1>{props.date.toLocaleDateString()}</h1>
);

export default ClockDate;