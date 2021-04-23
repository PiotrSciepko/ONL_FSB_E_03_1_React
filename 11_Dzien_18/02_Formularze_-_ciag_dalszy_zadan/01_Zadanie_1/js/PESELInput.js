import React, {useState} from 'react';

const PeselInput = () => {
    const [pesel, setPesel] = useState();

    return (
        <div>
            <form>
                <input type={"text"} value={pesel} onChange={e => setPesel(e.target.value)}/>
                <div>
                    {/^[0-9]{11}$/.test(pesel) ?
                        <input type={"submit"} value={"Prześlij"}/> : "Niepoprawny numer pesel"}

                </div>
            </form>

        </div>
    );
};

export default PeselInput;