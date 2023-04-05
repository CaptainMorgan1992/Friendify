import {Link} from "react-router-dom";
import LogoutButton from "./LogoutButton.jsx";
import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";
import AddFriendButton from "./AddFriendButton.jsx";


export default function (){
    const {auth} = useContext(GlobalContext)

    return <nav id={"navigation"}>
        <Link to={'/policy'}>
        <button>Our policy</button>
        </Link>
        <Link to={'/friends'}>
        <button>Rent a friend</button>
        </Link>
        <ShowProfile/>
        <ShowLogoutButton/>
        <ShowAddFriendButton/>
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

    function ShowAddFriendButton() {
        if (auth.loggedIn === true) {
            return <Link to="/addfriend">
             <AddFriendButton/>
            </Link>
        }
        else return null
    }

    function ShowProfile () {
        if(!auth.loggedIn) return null

        else return <Link to={'/profile'}>
            <button>Profile</button>
        </Link>
    }
}


