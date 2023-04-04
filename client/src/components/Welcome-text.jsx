import {Link} from "react-router-dom";

export default function () {
    return <div id={"Welcome-div"}>
        <h2 id={"Welcome-h2"}>Hi, and welcome to Friendlify!</h2>
        <p className={"Welcome-p"}>
            Friendlify is not more complicated than it sounds - a simple website that provides you with some company for a while.
            If you ever feel lonely or if you're just excited to meet new friends,
            friendlify can provide you with a safe meeting in a public place.

        </p>
        <p className={"Welcome-p"}>
            Down below you can see a small sample of the different individuals that you
            can book a friendly date with. If you have any questions or feel unsure about how
            to use this website, or how our policies look like, just head over to our <Link id={"policies-link"} to={"/policy"}>policies </Link>
             page.
        </p>
    </div>
}