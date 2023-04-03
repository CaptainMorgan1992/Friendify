import '../styles/logoutButton.css'
import {useContext} from "react";
import GlobalContext from "../../GlobalContext.jsx";

export default function () {
    const {logout} = useContext(GlobalContext)
    const fetchLogout = () => {
        logout()
       // alert("You are about to be logged out!!")
        /*setTimeout(() => {

        }, 2000) */

    }

return <button onClick={fetchLogout}>Log out</button>

}