import React, {useEffect, useState} from 'react';
import ClockDate from "./ClockDate";
import ClockTime from "./ClockTime";

function Clock() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setCurrentDate(new Date()), 1000);
        return () => clearInterval(interval);
    }, [])

    return (
        <>
            {currentDate.toString()}
            <ClockTime date={currentDate}/>
            <ClockDate date={currentDate}/>
        </>
    );
}

export default Clock;