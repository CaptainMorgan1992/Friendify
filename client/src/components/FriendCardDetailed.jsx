import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import React from "react"
import GlobalContext from "../GlobalContext.jsx";
import "../styles/bookingconfirmation.css"
import DeleteFriendComponent from "./DeleteFriendComponent.jsx";


export default function ({details}) {
    const {name, age, picture, city, traits, price} = details;
    const {auth, activity, duration, selectFriend} = useContext(GlobalContext)
    const [message, setMessage] = useState(" ")
    const nav = useNavigate()


    return <HireAFriend/>
    function HireAFriend(){
        return <div id={'detailed-friend-card'} >
            <h2 id={"h2-detailed-friendCard"}>{name}</h2>
            <img id="detailedPicture" alt={"picture of a friend"} src={picture}/>
            <p id="ageParagraph">{age} years old</p>
            <p id="cityParagraph">{city}</p>
            <p id="priceParagraph">{price} SEK</p>
            <p id="priceParagraph">Duration: 2 hours</p>
            <p className="traitsParagraph">{traits[0]} </p>
            <p className="traitsParagraph">{traits[1]} </p>
            <p className="traitsParagraph">{traits[2]} </p>
            <div id="standing-area">
                <DropDownMenu/>
                <ShowButton/>
            </div>
            <p id={"message-p"}>{message}</p>
        </div>
    }
    function DropDownMenu(){
        return <div>
            <select onChange={chooseActivity}>
                <option>Select a value</option>
                <option>Walk in a park</option>
                <option>Swim in a park</option>
                <option>Study programming</option>
            </select>
        </div>
    }
    function chooseActivity(e){
        e.preventDefault()
        activity.push(e.target.value)
        console.log(activity)
    }

    // Removed at the moment. duration is hardcoded
    function chooseDuration(e){
        e.preventDefault()
        duration.push(e.target.value)
        console.log(duration)
        if(duration.includes("2")){
            console.log("Price change?")
        } else if(duration.includes("4")){
            console.log("Price change?")
        }
    }

    function showLoginNotification() {
        setMessage("You have to login before you can hire a friend")
    }
    function hireFriend(details){
        showLoginNotification()
        if(auth.loggedIn){
            selectFriend.push(details)
            console.log(selectFriend)
            nav('/userconfirmation')
        }
    }

    function ShowButton() {
        if(auth.loggedIn === true && auth.email === "johnnyjohnson@example.com") {
            return <DeleteFriendComponent/>
        }
            return <div id="button-div">
                <button  onClick={e => hireFriend(details)} className={"booking-confirmation-button"}>Hire friend</button>
            </div>
        }

}




