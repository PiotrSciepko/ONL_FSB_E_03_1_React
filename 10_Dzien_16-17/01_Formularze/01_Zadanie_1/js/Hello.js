import React, {useState} from 'react';

const Hello = () => {
    const [name, setName] = useState("Ty");

    return (
        <div>
            <h1>Hello, {name}</h1>
            <form>
                <input type="text" onChange={(e) => setName(e.target.value)}/>
            </form>
        </div>
    );
};

export default Hello;