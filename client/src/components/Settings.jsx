import {useContext, useState} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function () {
    const {updateInfo} = useContext(GlobalContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const fetchupdateInfo = (e) => {
        e.preventDefault()
        updateInfo(password)
    }

    return<form onSubmit={fetchupdateInfo}>

        <input placeholder={'example@example.com'}
               type={'email'}
               value={email}
               onChange={e => setEmail(e.target.value)}/>

        <input placeholder={'********'}
               type={'password'}
               value={password}
               onChange={e => setPassword(e.target.value)}/>

        <button>Log In</button>
    </form>
}