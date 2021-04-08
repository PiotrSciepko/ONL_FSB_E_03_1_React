import React, {Component} from "react";
import ReactDOM from "react-dom";
import items from "./data/products";

const Receipt = (props) => {
    return (
        <table className={"table"}>
            <ReceiptHeader/>
            <ReceiptItems>
                {props.items.map(item => <ReceiptItem key={item.code} item={item}/>)}
            </ReceiptItems>
            <ReceiptFooter items={items}/>
        </table>
    )
}

const ReceiptHeader = () => {
    return (
        <thead>
        <tr>
            <th>Nazwa</th>
            <th>Cena</th>
            <th>Ilość</th>
            <th>Łączna cena</th>
        </tr>
        </thead>
    )
}

const ReceiptFooter = (props) => {
    return (
        <tfoot>
        <tr>
            <td>RAZEM</td>
            <td>-</td>
            <td>-</td>
            <td>
                {props.items
                    .reduce((a, b) => (a + b.single_price * b.qty), 0)
                    .toFixed(2)} zł
            </td>
        </tr>
        </tfoot>
    )
}

const ReceiptItem = ({item}) => {
    return (
        <tr key={item.code}>
            <td>{item.name}</td>
            <td>{item.single_price.toFixed(2)} zł</td>
            <td>{item.qty}</td>
            <td>{(item.single_price * item.qty).toFixed(2)} zł</td>
        </tr>
    )
}

const ReceiptItems = (props) => {
    return (
        <tbody>
        {props.children}
        </tbody>
    )
}

const App = () => {
    return <Receipt items={items}/>
}


ReactDOM.render(
    <App/>
    , document.getElementById("app"));
