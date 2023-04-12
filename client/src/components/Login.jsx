import GlobalContext from "../GlobalContext.jsx";
import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {submitLogin} = useContext(GlobalContext)
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

        <input placeholder={'example@example.com'}
               type={'email'}
               value={email}
               onChange={e => setEmail(e.target.value)}/>

        <input placeholder={'********'}
               type={'password'}
               value={password}
               onChange={e => setPassword(e.target.value)}/>

        <button>Log In</button>
       <p>Dont have an account?<Link id={'register-link'} to={'/register'}> Register here </Link> </p>
    </form>
}