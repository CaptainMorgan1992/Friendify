import {Link} from "react-router-dom";
import LogoutButton from "./LogoutButton.jsx";
import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";


export default function (){
    const {auth} = useContext(GlobalContext)

    return <nav id={"navigation"}>
        <Link to={'/policy'}>
        <button>Our policy</button>
        </Link>
        <button>Rent a friend</button>
        <ShowProfile/>
        <ShowLogoutButton/>
    </nav>

    function ShowLogoutButton() {
        if (auth.loggedIn === true) return <LogoutButton/>
        else return <>
            <Link to="/login">
                <button>Log in</button>
            </Link>

            <Link to="/register">
                <button>Register</button>
            </Link>
        </>

    }

    function ShowProfile () {
        if(!auth.loggedIn) return null

        else return <Link to={'/profile'}>
            <button>Profile</button>
        </Link>
    }
}


