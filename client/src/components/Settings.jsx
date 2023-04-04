import React, {useContext, useState} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function () {
    const {updateInfo} = useContext(GlobalContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("")
    const [city, setCity] = useState("");


    const postUser = (e) => {
        e.preventDefault()
        if (!name || !email || !password || !city) {
            return console.log('fields cannot be empty!');
        }
        updateInfo(name, email, phonenumber, password, city)
    }


    return <>
        <h1>Update Account</h1>
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
    </>
}
