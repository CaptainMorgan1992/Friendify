import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import React from "react"
import GlobalContext from "../GlobalContext.jsx";
import "../styles/bookingconfirmation.css"



export default function ({friendDetails}) {
    const {_id, name, age, picture, city, traits, price} = friendDetails;
    const {auth, activity, selectFriend, additionalService, deleteFriend, friends, loadFriends,time,setTime} = useContext(GlobalContext)
	const [message, setMessage] = useState(" ")

    const nav = useNavigate()
    //console.log(_id)
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
                <SelectDate/>
                <AdditionalServices/>
                <ShowButton/>
            </div>
            <p id={"message-p"}>{message}</p>


        </div>
    }

    function AdditionalServices() {
        if (auth.loggedIn === true && auth.email === "johnnyjohnson@example.com") {
            return null
        } else {
            return <div id={'additional-services-div'}>
                <div id={"additional-services-titles"}>
                    <h5>Add an additional service (+100kr) </h5>
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
    }
    function DropDownMenu() {
        if (auth.loggedIn === true && auth.email === "johnnyjohnson@example.com") {
            return null
        } else {
            return <div id={"activity-div"}>
                <label>Choose activity: </label>
                <select onChange={chooseActivity}>
                    <option>Select a value</option>
                    <option>Walk in a park</option>
                    <option>Swim in a park</option>
                    <option>Study programming</option>
                </select>


            </div>
        }
    }
    function  deleteFriendFromDatabase  (e) {
        e.preventDefault()
        deleteFriend(friendDetails)
        handleDeletion()
    }

   function SelectDate(){
        if(auth.loggedIn === true && auth.email === "johnnyjohnson@example.com") {
            return null
        }
        else {
            return <div id={'choose-time'}>
                <label  htmlFor="meeting-time">Choose a time for your appointment:</label>

                <input onChange={chooseTime} type="datetime-local" id="meeting-time"
                       name="meeting-time" value={time}
                       timezone="Europe/Stockholm"
                       pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
                       required/>
            </div>
        }
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
        setTime(e.target.value) //ACHTUNG: ONLY IN DB: Logs out the date 2 hours earlier(eg, 2022-12-12:12.00 = logs out: 2022-12-12:10.00)
        console.log(time)
    }
    function hireFriend(friendDetails){
        if(auth.loggedIn){
            selectFriend.push(friendDetails)
            console.log(selectFriend)
            nav('/userconfirmation')
        }
    }

    function handleDeletion() {
        setMessage("You have successfully deleted the friend from the database")
    }


    function ShowButton() {
        if(auth.loggedIn === true && auth.email === "johnnyjohnson@example.com") {
            return <div id="button-div">
                <form onSubmit={deleteFriendFromDatabase}>
                    <button type={'submit'} className={"booking-confirmation-button"}>Delete Friend</button>
                </form>

            </div>
        } else {
            return    <div id="button-div">
                        <button  onClick={e => hireFriend(friendDetails)} className={"booking-confirmation-button"}>Hire friend</button>
                </div>
        }}

}


