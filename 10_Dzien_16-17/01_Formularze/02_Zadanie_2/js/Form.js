import React, {useState} from 'react';
import fakeAPI from "./data/fakeAPI";

const Form = () => {
    const [login, setLogin] = useState({userName: '', password: ''})
    const [isHidden, setIsHidden] = useState(false)
    const [message, setMessage] = useState('')
    const [validInfo, setValidInfo] = useState({errLogin: null, errPass: null})

    const handleChange = e => {
        const {name, value} = e.target
        setLogin(prev => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setValidInfo({errLogin: null, errPass: null})
        let err = 0;
        if (login.userName.length < 3) {
            setValidInfo(prev => ({...prev, errLogin: "Login musi być dłuższy niż 2 znaki"}))
            err++
        }
        if (login.password.length < 5) {
            setValidInfo(prev => ({...prev, errPass: "Hasło musi być dłuższe niż 4 znaki"}))
            err++
        }
        if (err > 0) return

        fakeAPI.login({username: login.userName, password: login.password})
            .then(username => {
                setIsHidden(true)
                setMessage(`Witaj ${username.name} ${username.surname} \n Ostatnie logowanie: ${username.lastLogin.toLocaleString()}`)
            })
            .catch(err => setMessage(err))
    }

    return (
        <div>
            {message.split("\n").map((line, index) => <h4 key={index}>{line}</h4>)}
            <form hidden={isHidden} onSubmit={handleSubmit}>
                Login: <input type={"text"} name={"userName"} value={login.userName} onChange={handleChange}/>
                {validInfo.errLogin ? <span style={{color: "red"}}><br/>{validInfo.errLogin}</span> : null}
                <br/>
                Hasło: <input type={"password"} name={"password"} value={login.password} onChange={handleChange}/>
                {validInfo.errPass ? <span style={{color: "red"}}><br/>{validInfo.errPass}</span> : null}
                <br/>
                <input type={"submit"} value={"Zaloguj!"}/>
            </form>

        </div>
    );
};

export default Form;