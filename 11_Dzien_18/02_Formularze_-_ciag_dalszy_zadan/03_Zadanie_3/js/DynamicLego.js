import React, {useEffect, useState} from 'react';

const DynamicLego = () => {
    const [qty, setQty] = useState(0);
    const [list, setList] = useState([]);

    useEffect(() => {
        setList([...new Array(+qty)].map((_, i) => i + 1))
    }, [qty]);

    return (
        <div>
            <form>
                <input type={"number"} value={qty} onChange={e => setQty(e.target.value)}/>
            </form>
            <ul>
                {qty !== 0 && list.map(i => <li key={i} style={{
                    backgroundColor: "red",
                    height: "50px",
                    width: `${i * 50}px`
                }}/>)}
            </ul>
        </div>
    );
};

export default DynamicLego;