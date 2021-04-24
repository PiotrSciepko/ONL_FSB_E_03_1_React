import React, {useEffect, useState} from 'react';

const WhoIsPresent = ({persons}) => {
    const [allPersons, setAllPersons] = useState(persons);
    const [selPersons, setSelPersons] = useState([]);

    const handleSelect = e => {
        const sel = e.target.value;
        setAllPersons(prev => prev.filter(el => el !== sel));
        setSelPersons(prev => [...prev, sel])
    }

    return (
        <div>
            <form>
                <select onChange={handleSelect}>
                    <option style={{display: "none"}}>Select person...</option>
                    {allPersons.map((item, index) => <option key={item + index} value={item}>{item}</option>)}
                </select>
            </form>
            <ul>
                {selPersons.map((item, index) => <li key={item + index}>{item}</li>)}
            </ul>
        </div>
    );
};

export default WhoIsPresent;
