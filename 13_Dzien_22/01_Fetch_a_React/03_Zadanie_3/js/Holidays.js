import React, {useEffect, useState} from 'react';

const Holidays = () => {
    const [holidays, setHolidays] = useState([]);
    const [country, setCountry] = useState("PL");

    useEffect(() => {
        (async () => {
            const resp = await fetch(`https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=${country}`);
            const data = resp.ok && await resp.json();
            setHolidays(data.holidays);
        })()
    }, [country]);

    return (
        <div>
            <form>
                <select value={country} onChange={e => setCountry(e.target.value)}>
                    <option value={"PL"}>PL</option>
                    <option value={"GB"}>GB</option>
                    <option value={"US"}>US</option>
                </select>
            </form>
            <ul>
                {holidays.map(item => <li key={item.uuid} className={'holiday-name'}><h3>{item.name}</h3>
                    <div className={'holiday-date'}>{item.date}</div>
                </li>)}
            </ul>
        </div>

    );
};

export default Holidays;