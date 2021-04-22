import React, {useState} from 'react';

const TextField = () => {
    const [text, setText] = useState(' ');

    return (
        <div>
            <p>{text}</p>
            <span>{text.length}</span>
            <br/><br/>
            <select value={text} onChange={(e) => setText(e.target.value)}>
                <option value={"First"}>First</option>
                <option value={"Second"}>Second</option>
                <option value={"Third"}>Third</option>
                <option value={"Fourth"}>Fourth</option>
            </select>
        </div>
    );
};

export default TextField;