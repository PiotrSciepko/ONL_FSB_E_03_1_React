import React, {useState} from 'react';

const AdultStuff = () => {
    const [age, setAge] = useState();

    return (
        <div>
            <form>
                <input type={"number"} placeholder={"Podaj wiek:"} value={age} onChange={e => setAge(e.target.value)}/>
                <AdultStuffBox age={age}/>
            </form>
        </div>
    );
};

export default AdultStuff;


const AdultStuffBox = ({age}) => {
    return (
        <div>
            {age >= 18 ? "Lorem ipsum, treść dla pełnoletnich." : null}
        </div>
    );
};

