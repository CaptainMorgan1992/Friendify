import Navigation from "./navigation.jsx";
import {Link} from "react-router-dom";


export default function (){

    return <>
        <Link to={'/'} style={{textDecoration: 'none'}} >
            <header>
                <h1>Friendify</h1>
            </header>
        </Link>

        <Navigation/>
    </>




}