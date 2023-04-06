import '../styles/logoutButton.css'
import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";


export default function () {
    const {auth} = useContext(GlobalContext)
    const fetchLogin = () => {
        auth()
        // alert("You are about to be logged out!!")
        /*setTimeout(() => {

        }, 2000) */

    }

    return <button onClick={fetchLogin}>Add friend</button>


}