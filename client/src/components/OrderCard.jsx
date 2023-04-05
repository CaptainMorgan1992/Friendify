import React, {useContext, useEffect, useState} from "react";
import FriendCard from "../components/FriendCard.jsx";
import "../styles/bookingconfirmation.css"
import GlobalContext from "../GlobalContext.jsx";
import FriendCardDetailed from "../components/FriendCardDetailed.jsx";
import {useNavigate} from "react-router-dom";

export default function ({orderDetails}) {
    const {activity} = useContext(GlobalContext)
    const {duration} = useContext(GlobalContext)
    const {name,picture, city, price} = orderDetails;
    let nav = useNavigate()
    return <div id={'confirmation-div'}>
            <h2>Confirm your booking</h2>
        <img id="detailedPicture" alt={"picture of a friend"} src={picture}/>
            <div id='confirmation-details'>
                <h3 id={'booking-details'}>Booking details</h3>
                <h4>Your friend: {name}</h4>
            <h4>{ activity.map(a => <h4>Your activity: {a}</h4>)}</h4>
                <h4>Location:{city}</h4>
                <h4> { duration.map(a => <h4>Duration: {a} Hours</h4>)} </h4>
                <h4>Booked by: User X</h4>
                <h4>Contact: </h4>
                <h4>Total cost: {price} </h4>
                <button onClick={confirmBooking}>Confirm</button>
                <h4>Time <confirmBooking/></h4>


            </div>
        </div>


    function confirmBooking(){
     setTimeout(()=> {
            console.log("Friend has arrived")
        }, 1500)

    }
}

















