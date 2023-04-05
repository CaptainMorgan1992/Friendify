import {Link} from "react-router-dom";
import "../styles/registrationconfirmation.css"

export default function() {
    return <div id={"registration-confirmation-div"}>
        <h3 id="registration-h3">You have now registered successfully. Please
            <Link id="login-link" to={"/login"}> log in </Link> if you'd like to make a booking.</h3>
    </div>
}
