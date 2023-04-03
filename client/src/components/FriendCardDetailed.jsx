import friends from "./Friends.jsx";
import {useContext} from "react";
import GlobalContext from "../../GlobalContext.jsx";
import {json} from "react-router-dom";


export default function ({details}) {
    const {name, age, picture, city, id, traits, price} = details;
    const {friends} = useContext(GlobalContext)
    console.log({price})
    return <div id={'friend-card'}>
        <h2>{name}</h2>
        <img src={picture}/>
        <p>{age}</p>
        <p>{city}</p>
        <p>{price}</p>
        <p>{traits}</p>
    </div>
}

