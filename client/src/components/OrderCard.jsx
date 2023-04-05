import React, {useContext, useEffect, useState} from "react";
import FriendCard from "../components/FriendCard.jsx";
import "../styles/bookingconfirmation.css"
import GlobalContext from "../GlobalContext.jsx";
import FriendCardDetailed from "../components/FriendCardDetailed.jsx";
import {useNavigate} from "react-router-dom";

export default function ({orderDetails}) {
    const {activity} = useContext(GlobalContext)
    const {duration} = useContext(GlobalContext)
    const [timer, setTimer] = useState()
    const [confirmed, setconfirmed] = useState()
    const {name,picture, city, price} = orderDetails;
    let nav = useNavigate()
    useEffect(() => {

    }, []);
    return <div id={'confirmation-div'}>
            <h2>Confirm your booking</h2>
        <img id="detailedPicture" alt={"picture of a friend"} src={picture}/>
            <div id='confirmation-details'>
                <button onClick={confirmBooking}>Confirm</button>
                <h3 id={'booking-details'}>Booking details</h3>
                <h4>Your friend: {name}</h4>
            { activity.map(a => <h4>Your activity: {a}</h4>)}
                <h4>Location:{city}</h4>
             { duration.map(a => <h4>Duration: {a} Hours</h4>)}
                <h4>Booked by: User X</h4>
                <h4>Contact: </h4>
                <h4>Total cost: {price} </h4>
                <h4>Time until arrival:{timer}</h4>
                <h4>{confirmed}</h4>
            </div>
        </div>


    function confirmBooking(){
        setTimer(40)
        setconfirmed("Your booking has been confirmed")
        const intervalId = setInterval(() => {
            setTimer(timer => timer - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }

}



















