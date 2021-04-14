import React from "react";

const ToDoList = () => {
    const [toDoList, setToDoList] = React.useState([]);

    const addToDo = () => setToDoList(prev => [...prev, `Zadanie ${prev.length + 1}`]);

    return (
        <>
            <button onClick={addToDo}>Dodaj zadanie</button>
            <ul>{toDoList.map((toDo, index) => <li key={index}>{toDo}</li>)}</ul>
        </>
    )
}

export default ToDoList;