import React, {Component} from "react";
import ReactDOM from "react-dom";

const ShopItem = ({item}) => {
    return (
        <section>
            <ShopItemHeader item={item}/>
            <ShopItemDescription item={item}/>
            <ShopPricing item={item}/>
        </section>
    )
}

const ShopItemHeader = ({item}) => {
    return (
        <header>
            <h1>{item.title}</h1>
            <img src={item.image}/>
        </header>
    )
}

const ShopItemDescription = ({item}) => {
    return (
        <article>
            <p>{item.description}</p>
        </article>
    )
}

const ShopPricing = ({item}) => {
    return (
        <footer>
            Cena: {item.price} zł<br/>
            <button>Kup!</button>
        </footer>
    )
}

const App = (props) => {
    return <ShopItem item={props.item}/>
}

const item = {
    title: "MacBook Pro",
    image: "https://bit.ly/2EEtduD",
    description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
    price: 9999
}


ReactDOM.render(
    <App item={item}/>,
    document.getElementById("app")
);
