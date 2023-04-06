import {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import React from "react"
import GlobalContext from "../GlobalContext.jsx";
import "../styles/bookingconfirmation.css"



export default function ({friendDetails}) {
    const {name, age, picture, city, traits, price} = friendDetails;
    const {auth, activity,duration, selectFriend, additionalService,time} = useContext(GlobalContext)

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
                <AdditionalServices/>
                <div id="button-div">
                        <button  onClick={e => hireFriend(friendDetails)} className={"booking-confirmation-button"}>Hire friend</button>
                </div>
            </div>
        </div>
    }

    function AdditionalServices() {
        return <div>
            <div id={"additional-services-titles"}>
                <h4>Add an additional service (+100kr) </h4>
                <h5>Your friend can bring:</h5>
            </div>
            <div id={"additional-services-option"}>
                <select onChange={chooseAdditionalService}>
                    <option>Select a value</option>
                    <option>Flowers</option>
                    <option>A cup of coffee</option>
                    <option>A dog</option>
                    <option>A grandma</option>
                    <option>Dogge Doggelito</option>
                </select>
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
                <option>16.00</option>
                <option>18.00</option>
                <option>20.00</option>
            </select>
        </div>
    }
    function chooseActivity(e){
        e.preventDefault()
        activity.push(e.target.value)
        console.log(activity)
    }
    function chooseAdditionalService(e){
        e.preventDefault()
        additionalService.push(e.target.value)
        console.log(additionalService)
    }

    function chooseTime(e){
        e.preventDefault()
        time.push(e.target.value)
        console.log(time)
    }
    function hireFriend(friendDetails){
        if(auth.loggedIn){
            selectFriend.push(friendDetails)
            console.log(selectFriend)
            nav('/userconfirmation')
        }
    }

}


