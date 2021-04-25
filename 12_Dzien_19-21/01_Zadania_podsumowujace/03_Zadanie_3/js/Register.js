import React, {useState} from 'react';
import useUserInput from "./useUserInput";

const Register = () => {
    const [user, connectUser] = useUserInput({});
    const [summary, setSummary] = useState([]);
    const [errors, setErrors] = useState({});
    const [isHidden, setIsHidden] = useState(true);

    const handleSubmit = e => {
        e.preventDefault();
        setErrors({});
        !/^.{5,}$/.test(user.userName || '') && setErrors(prev => ({
            ...prev, userName: "Nazwa musi mieć min 5 znaków"
        }));
        !/^.+@.+$/.test(user.email) && setErrors(prev => ({
            ...prev, email: "Wprowadź poprawny email"
        }));
        !/^.{4,}$/.test(user.password || '') && setErrors(prev => ({
            ...prev, password: "Hasło musi mieć min 4 znaki"
        }));
        user.password !== user.rePassword && setErrors(prev => ({
            ...prev, rePassword: "Wprowadź poprawne hasło"
        }));
        !user.sex && setErrors(prev => ({...prev, sex: "Wybierz płeć"}));
        !/^.{3,}$/.test(user.address || '') && setErrors(prev => ({
            ...prev, address: "Adres musi mieć min 3 znaki"
        }));
        !/^[0-9]{2}-*[0-9]{3}$/.test(user.zipCode || '') && setErrors(prev => ({
            ...prev, zipCode: "Wprowadź poprawny kod pocztowy"
        }));
        !/^.{2,}$/.test(user.city || '') && setErrors(prev => ({
            ...prev, city: "Miasto musi mieć min 2 znaki"
        }));
        if (Object.keys(errors).length === 0) {
            setIsHidden(false);
            Object.values(user).map((info, index) => setSummary(prev => [...prev, <h6 key={info + index}>{info}</h6>]));
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                    <tr>
                        <td style={{padding: "30px", verticalAlign: "top"}}>
                            <h5>Dane osobowe</h5>
                            <h6>Imię i nazwisko:</h6>
                            <input type={"text"} name={"userName"} {...connectUser}/><br/>
                            <h6 style={{color: "red"}}>{errors.userName}</h6>
                            <h6>Email:</h6>
                            <input type={"text"} name={"email"} {...connectUser}/><br/>
                            <h6 style={{color: "red"}}>{errors.email}</h6>
                            <h6>Hasło:</h6>
                            <input type={"password"} name={"password"} {...connectUser}/><br/>
                            <h6 style={{color: "red"}}>{errors.password}</h6>
                            <h6>Powtórz:</h6>
                            <input type={"password"} name={"rePassword"} {...connectUser}/><br/>
                            <h6 style={{color: "red"}}>{errors.rePassword}</h6>
                            <h6>Płeć:</h6>
                            <select name={"sex"} {...connectUser}>
                                <option style={{display: "none"}}>Wybierz...</option>
                                <option value={"mężczyzna"}>Mężczyzna</option>
                                <option value={"kobieta"}>Kobieta</option>
                            </select><br/>
                            <h6 style={{color: "red"}}>{errors.sex}</h6>
                        </td>
                        <td style={{padding: "30px", verticalAlign: "top"}}>
                            <h5>Dane do wysyłki</h5>
                            <h6>Adres:</h6>
                            <input type={"text"} name={"address"} {...connectUser}/><br/>
                            <h6 style={{color: "red"}}>{errors.address}</h6>
                            <h6>Kod pocztowy:</h6>
                            <input type={"text"} name={"zipCode"} {...connectUser}/><br/>
                            <h6 style={{color: "red"}}>{errors.zipCode}</h6>
                            <h6>Miasto:</h6>
                            <input type={"text"} name={"city"} {...connectUser}/><br/>
                            <h6 style={{color: "red"}}>{errors.city}</h6>
                            <br/>
                            <input type={"submit"} value={"Zapisz"} disabled={!isHidden}/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{padding: "30px"}}>
                            <div hidden={isHidden}>
                                Podsumowanie:
                                {summary}
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default Register;