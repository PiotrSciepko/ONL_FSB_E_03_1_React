import React, {useEffect, useState} from 'react';

const Holidays = () => {
    const [holidays, setHolidays] = useState([]);

    useEffect(() => {
        fetch("https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=GB")
            .then(resp => resp.json())
            .then(data => setHolidays(data.holidays))
    }, []);

    return (
        <div>
            <ul>
                {holidays.map(item => <li key={item.uuid} className={'holiday-name'}><h3>{item.name}</h3>
                    <div className={'holiday-date'}>{item.date}</div>
                </li>)}
            </ul>
        </div>
    );
};

export default Holidays;