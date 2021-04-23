import React, {useEffect, useState} from 'react';

const SelectOrType = (props) => {
    const [items, setItems] = useState([...props.items, "inne"]);
    const [item, setItem] = useState("BMW");
    const [isHidden, setIsHidden] = useState(true);
    const [newItem, setNewItem] = useState('');

    useEffect(() => {
        setIsHidden(item !== "inne");
        setNewItem('');
    }, [item]);

    useEffect(() => setItem(newItem), [items])

    const handleSubmit = e => {
        e.preventDefault();
        setItems(prev => [...prev.filter(item => item !== "inne"), newItem, "inne"]);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select value={item} onChange={e => setItem(e.target.value)}>
                    {items.map((item, index) => <option key={index} value={item}>{item}</option>)}
                </select>
                <input hidden={isHidden} type={"text"} value={newItem} onChange={e => setNewItem(e.target.value)}/>
                <button hidden={isHidden} type={"submit"}>Zatwierdź</button>
            </form>
        </div>
    );
};

export default SelectOrType;