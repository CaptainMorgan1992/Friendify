import {useContext} from "react";
import GlobalContext from "../../GlobalContext.jsx";
import {Link, useNavigate, useParams,} from "react-router-dom";
import React from "react"


export default function ({details}) {
    const {name, age, picture, city, traits, price} = details;
    const {order} = useContext(GlobalContext)
    const {auth} = useContext(GlobalContext)
    const {friends} = useContext(GlobalContext)
    const nav = useNavigate()
    //const id = useParams().id
    return <HireAFriend/>






    function HireAFriend(){
        return <div id={'detailed-friend-card'} >
            <h2>{name}</h2>
            <img id="detailedPicture" alt={"picture of a friend"} src={picture}/>
            <p id="ageParagraph">{age}</p>
            <p id="cityParagraph">{city}</p>
            <p id="priceParagraph">Price per 2 hrs{price}</p>
            <p id="traitsParagraph">{traits}</p>
            <div id="standing-area">
                <DropDownMenu/>
                <div id="button-div">
                        <button disabled={false} onClick={e => hireFriend(details)} className={"booking-confirmation-button"}>Hire friend</button>
                </div>
            </div>
        </div>
    }
    function DropDownMenu(){
        return <select onChange={chooseActivity}>
            <option>Select a value</option>
            <option>Fika</option>
            <option>Simma</option>
            <option>Springa</option>
        </select>
    }
    function chooseActivity(e){
        e.preventDefault()
        order.push(e.target.value)
        console.log(order)
    }
    function hireFriend(details){
        if(auth.loggedIn){
            order.push(details)
            console.log(order)
            nav('/userconfirmation')
        }

    }

}




