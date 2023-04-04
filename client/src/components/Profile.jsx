import Orders from "./Orders.jsx";
import {Link} from "react-router-dom";

export default function () {
    return <>
        <Link to={'settings'}>
            <button>Settings</button>
        </Link>
        <Orders/>
    </>

}