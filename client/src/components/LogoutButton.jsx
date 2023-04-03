import '../styles/logoutButton.css'
import {useContext} from "react";
import GlobalContext from "../../GlobalContext.jsx";
import {Link, useNavigate} from "react-router-dom";

export default function () {
    const {logout} = useContext(GlobalContext)
    const nav = useNavigate()
    const fetchLogout = () => {
        alert("You are about to be logged out!!")
        setTimeout(() => {
            logout()
        }, 2000)

    }

return <button onClick={fetchLogout}>Log out</button>

}