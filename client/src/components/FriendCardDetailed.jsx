import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import React from "react"
import GlobalContext from "../GlobalContext.jsx";
import "../styles/bookingconfirmation.css"


export default function ({details}) {
    const {name, age, picture, city, traits, price} = details;
    const {auth, activity,time, selectFriend} = useContext(GlobalContext)

    const nav = useNavigate()

    return <HireAFriend/>
    function HireAFriend(){
        return <div id={'detailed-friend-card'} >
            <h2>{name}</h2>
            <img id="detailedPicture" alt={"picture of a friend"} src={picture}/>
            <p id="ageParagraph">{age}</p>
            <p id="cityParagraph">{city}</p>
            <p id="priceParagraph">{price}kr</p>
            <p id="priceParagraph">Duration: 2 hours</p>
            <p id="traitsParagraph">{traits}</p>
            <div id="standing-area">
                <DropDownMenu/>
                <div id="button-div">
                        <button  onClick={e => hireFriend(details)} className={"booking-confirmation-button"}>Hire friend</button>
                </div>
            </div>
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
            <select onChange={chooseTime}>
                <option>Select a value</option>
                <option value={16}>16.00</option>
                <option value={18}>18.00</option>
                <option value={20}>20.00</option>
            </select>
        </div>
    }
    function chooseActivity(e){
        e.preventDefault()
        activity.push(e.target.value)
        console.log(activity)
    }

   // does not get pushed to database
    function chooseTime(e){
        e.preventDefault()
        time.push(e.target.value)
        console.log(time)
    }
    function hireFriend(details){
        if(auth.loggedIn){
            selectFriend.push(details)
            console.log(selectFriend)
            nav('/userconfirmation')
        }
    }
}




