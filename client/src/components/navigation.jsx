import {Link} from "react-router-dom";
import LogoutButton from "./LogoutButton.jsx";
import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";


export default function (){
    const {auth} = useContext(GlobalContext)

    return <nav id={"navigation"}>
        <button>Our policy</button>
        <button>Rent a friend</button>
        <ShowLogoutButton/>
    </nav>

    function ShowLogoutButton() {
        if (auth.loggedIn === true) return <LogoutButton/>

        else return <>
            <Link to="/login">
                <button id="login-button">Log in</button>
            </Link>
        </>

    }
}


