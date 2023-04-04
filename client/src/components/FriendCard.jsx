import friends from "./Friends.jsx";
import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";
import {json} from "react-router-dom";


export default function ({details}) {
    const {name, age, picture, city, id} = details;
    const {friends} = useContext(GlobalContext)
    return <div id={'friends-startpage-card'}>
        <h2 id={"friends-startpage-h2"}>{name}</h2>
        <img id="friends-startpage-image" src={picture}/>
        <p className={"friends-startpage-paragraph"}>{age} years old</p>
        <p className={"friends-startpage-paragraph"}>{city}</p>


    </div>
}
