import Orders from "./Orders.jsx";
import {Link} from "react-router-dom";
import "../styles/order.css"
export default function () {

    return <>
        <Link to={'/settings'}>
            <button id={'settings-button'}>Settings</button>
        </Link>
        <Orders/>
    </>

}