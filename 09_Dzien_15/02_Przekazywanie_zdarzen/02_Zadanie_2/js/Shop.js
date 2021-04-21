import React, {useState} from 'react';
import ShopItem from "./ShopItem";

const Shop = () => {
    const [list, setList] = useState([])

    const handleBuy = title => {
        setList(prev => [...prev, title])
    }

    return (
        <div>
            <ShopItem title="MacBook Pro" onBuy={handleBuy}/>
            <ShopItem title="Dell X5500" onBuy={handleBuy}/>
            <ShopItem title="Asus NT6000" onBuy={handleBuy}/>
            <ul>
                {list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
};

export default Shop;