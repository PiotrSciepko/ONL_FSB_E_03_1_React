import React, {Component} from "react";
import ReactDOM from "react-dom";

class ShopItem extends Component {
    render() {
        return (
            <section>
                <div className={"shoplist"}>
                    {this.props.items.map((item) => <ShopItemHeader item={item}/>)}
                </div>
            </section>
        )
    }
}

class ShopItemHeader extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.item.title}</h1>
                <img src={this.props.item.image}/>
            </header>
        )
    }
}

class App extends Component {
    render() {
        return <ShopItem items={this.props.items}/>
    }
}

const items = [
    {
        title: "Mysz komputerowa",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg"
    },
    {
        title: "Klawiatura",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png"
    },
    {
        title: "Laptop programisty",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg"
    }
];


ReactDOM.render(
    <App items={items}/>,
    document.getElementById("app")
);
