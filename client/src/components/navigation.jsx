import {Link} from "react-router-dom";

export default function () {

    return <nav id={"navigation"}>
        <button>Our policy</button>
        <Link to="/friends">
            <button>Rent a friend</button>
        </Link>
        <button>Log in</button>
    </nav>

}