import React, {useEffect, useState} from 'react';

const DynamicLego = () => {
    const [qty, setQty] = useState(0);
    const [list, setList] = useState([]);

    const style = {backgroundColor: "red", height: "50px"}

    useEffect(() => {
        setList([...new Array(+qty)].map((_, i) => <li key={i} style={{...style, width: `${(i + 1) * 50}px`}}/>))
    }, [qty]);

    return (
        <div>
            <form>
                <input type={"number"} value={qty} onChange={e => e.target.value >= 0 && setQty(e.target.value)}/>
            </form>
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default DynamicLego;