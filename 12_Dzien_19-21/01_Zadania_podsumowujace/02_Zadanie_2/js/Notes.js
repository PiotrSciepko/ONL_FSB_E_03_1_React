import React, {useState} from 'react';

const Notes = () => {
    const [note, setNote] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        setNote('');
    }

    return (
        <div>
            <span>{note}</span>
            <form onSubmit={handleSubmit}>
                <textarea value={note} onChange={e => setNote(e.target.value)}/>
                <br/>
                <button type={"submit"}>Wyczyść</button>
            </form>
        </div>
    );
};

export default Notes;