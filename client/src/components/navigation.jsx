import {Link} from "react-router-dom";
import LogoutButton from "./LogoutButton.jsx";
import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";


export default function (){
    const {auth} = useContext(GlobalContext)

    return <nav id={"navigation"}>
        <PolicyButton/>
        <RentAFriendButton/>
        <ShowAddFriendButton/>
        <ShowProfile/>
        <ShowLogoutButton/>

    </nav>

    function ShowLogoutButton() {
        if (auth.loggedIn === true) {
            return <Link to={"/"}>
            <LogoutButton/>
            </Link>}
        else return <>
            <Link to="/login">
                <button>Log in</button>
            </Link>

            <Link to="/register">
                <button>Register</button>
            </Link>
        </>

    }

    function RentAFriendButton() {
        if (auth.loggedIn && auth.email === "johnnyjohnson@example.com") {
            return <Link to={'/friends'}>
                <button>Delete a friend</button>
            </Link>
        } else {
            return <Link to={'/friends'}>
                <button>Rent a friend</button>
            </Link>
        }
    }

    function PolicyButton() {
        if (auth.loggedIn === true && auth.email === "johnnyjohnson@example.com") {
            return null
        }
        else {
            return <Link to={'/policy'}>
                <button>Our policy</button>
            </Link>
        }
    }

    function ShowAddFriendButton() {
        if (auth.loggedIn === true && auth.email === "johnnyjohnson@example.com") {
            return <Link to="/addfriend">
                <button>Add friend</button>
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


