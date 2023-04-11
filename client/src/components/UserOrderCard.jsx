import React, {useContext, useEffect, useState} from "react";
import "../styles/bookingconfirmation.css"
import GlobalContext from "../GlobalContext.jsx";


export default function ({orderFriendDetails}) {
    const {
        activity,
        submitOrder,
        time,
        additionalService,
        getCurrentUser,
        currentUser,
        auth,
        orders
    } = useContext(GlobalContext)
    const [timer, setTimer] = useState()
    const [confirmed, setConfirmed] = useState()
    const [confirmedText, setConfirmedText] = useState()
    const {name,picture, city, price} = orderFriendDetails;
    let {additionalServicePrice} = calcPrice();

    useEffect( () => {
        getCurrentUser()
    }, [])


    return <>
       <div id={'confirmation-div'}>
            <h2>Confirm your booking</h2>
        <img id="detailedPicture" alt={"picture of a friend"} src={picture}/>
            <div id='confirmation-details'>
                <h3 id={'booking-details'}>Booking details</h3>
                <h4>Your friend: {name}</h4>
                <h4>Booked by: {getUser()}</h4>
                <h4>Your activity: {lastPickedActivity()}</h4>
                <h4>Location:{city}</h4>
              <h4>Your additional service: {lastPickedAdditionalService()}</h4>
                <h4>Total cost: {price + additionalServicePrice}kr </h4>
                 <h4>Time: {time}:00</h4>
				 <h4>Duration: 2 hours </h4>
                <p>Need help?: Call 042-222-33-22</p>

                <button onClick={confirmBooking}>Confirm booking</button>

                <h4>{confirmedText}</h4>
                <h4>{confirmed}</h4>

            </div>

        </div> </>

    function calcPrice(){
        let additionalServicePrice = 0;
        if (additionalService.length > 0) {
             additionalServicePrice = 100;
        } else {
             additionalServicePrice = 0;
        }
        console.log(additionalServicePrice)

        return { additionalServicePrice }
    }

    function getUser(){
        const currentUserCopy = {...currentUser}
        return currentUserCopy.name
    }
    function lastPickedTime(){
        //return time
    }
    function lastPickedAdditionalService(){
        return additionalService.slice(-1)
    }
    function lastPickedActivity(){
          return activity.slice(-1)
    }
    function confirmBooking(){
        submitOrder(currentUser,orderFriendDetails,activity,time,additionalService)
        console.log(submitOrder)
        setTimer(40)
        setConfirmed(<i class="fa-regular fa-face-smile fa-spin"></i>)
        setConfirmedText("We are processing your order")
        //setBooked(new Date().getMonth())
        const intervalId = setInterval(() => {
            setTimer(timer => timer - 1);
        }, 60000);

        if(timer === 0){
            return () => clearInterval(intervalId);
        }


    }

}



















