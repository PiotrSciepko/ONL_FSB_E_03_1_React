import React, {useState} from 'react';

const ToDoList = () => {
    const [list, setList] = useState([{id: 1, name: "Rzecz do zrobienia", done: false}]);
    const [newItem, setNewItem] = useState({id: '', name: '', done: ''});

    const handleClick = item => {
        setList(prev => prev.map(el => {
            el.done = el.id === item.id ? !el.done : el.done;
            return el;
        }))
    }

    const handleInput = e => {
        setNewItem({id: list.length + 1, name: e.target.value, done: false});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (newItem.name) {
            setList(prev => [...prev, newItem]);
            setNewItem(prev => ({...prev, name: ''}))
        }
    }

    return (
        <div className={"toDoList"}>
            <form className={"header"} onSubmit={handleSubmit}>
                <h2>Twoja lista zadań</h2>
                <input type="text" placeholder="np. Zrobić zakupy" value={newItem.name} onChange={handleInput}/>
                <button className="btn-add">Dodaj</button>
            </form>
            <ul>
                {list.map(item => <li key={item.id} className={item.done ? "done" : null}
                                      onClick={() => handleClick(item)}>{item.name}</li>)}
            </ul>
        </div>
    );
};

export default ToDoList;