import GlobalContext from "../../GlobalContext.jsx";
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function () {
    const {submitLogin} = useContext(GlobalContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()
    const fetchUser = (e) => {
        e.preventDefault()
        if (!email || !password) {
            return alert('Email and password fields cannot be empty!');
        }
        submitLogin(email, password)
        nav('/')
    }


    return <form onSubmit={fetchUser} >

        <input placeholder={'example@example.com'} type={'email'} value={email} onChange={event => setEmail(event.target.value)}/>

        <input placeholder={'********'} type={'password'} value={password} onChange={event => setPassword(event.target.value)}/>

        <button>Log In</button>
    </form>
}