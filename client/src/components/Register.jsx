import React, {useContext, useState} from "react";
import GlobalContext from "../GlobalContext.jsx";
import {Link, useNavigate} from "react-router-dom";

export default function () {
    const {register} = useContext(GlobalContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("")
    const [city, setCity] = useState("");
    const nav = useNavigate()


    const postUser = (e) => {
        e.preventDefault()
        if (!name || !email || !password || !phonenumber) {
            return console.log('Email and password fields cannot be empty!');
        }
        register(name, email, phonenumber, password, city)
        nav("/registrationconfirmation")
    }


    return <>
        <h1 id={"title-register-page"}>Create New Account</h1>
        <div className={"container"}>

            <form onSubmit={postUser}>
                <input placeholder={'Name'}
                       type={'name'}
                       value={name}
                       onChange={e => setName(e.target.value)}/>

                <input placeholder={'Email'}
                       type={'email'}
                       value={email}
                       onChange={e => setEmail(e.target.value)}/>

                <input placeholder={'Phonenumber'}
                       type={'number'}
                       value={phonenumber}
                       onChange={e => setPhoneNumber(e.target.value)}/>

                <input placeholder={'********'}
                       type={'password'}
                       value={password}
                       onChange={e => setPassword(e.target.value)}/>

                <input placeholder={'City'}
                       type={'text'}
                       value={city}
                       onChange={e => setCity(e.target.value)}/>

                <button type={'submit'}>Register</button>
            </form>
        </div>
    </>
}
