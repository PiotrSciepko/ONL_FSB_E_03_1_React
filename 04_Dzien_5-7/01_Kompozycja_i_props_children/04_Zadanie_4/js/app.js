import React, {Component} from "react";
import ReactDOM from "react-dom";

function Chat() {
    return (
        <section className="chat">
            <ChatHeader/>
            <ChatMessages>
                <ChatMessage number={1}/>
                <ChatMessage number={2}/>
                <ChatMessage number={3}/>
            </ChatMessages>
            <NewChatMessage/>
        </section>
    );
}

const ChatHeader = () => {
    return (
        <header>
            <h1>Chat prywatny</h1>
        </header>
    )
}

const ChatMessages = (props) => {
    return (
        <div>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}

const ChatMessage = (props) => {
    return (
        <li>Wpis z chatu {props.number}</li>
    )
}

const NewChatMessage = () => {
    return (
        <footer>
            <form>
                <input type="text"/>
                <button>Wyślij</button>
            </form>
        </footer>
    )
}

function App() {
    return <Chat/>;
}


ReactDOM.render(
    <App/>
    ,
    document.getElementById("app")
);