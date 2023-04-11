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
    } = useContext(GlobalContext)
    const [confirmedIcon, setConfirmedIcon] = useState()
    const [confirmedText, setConfirmedText] = useState()
    const [removeButton, setRemoveButton] = useState(false)
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
                 <h4>Time: {time}</h4>
				 <h4>Duration: 2 hours </h4>
                <p>Need help?: Call 042-222-33-22</p>
                <button style={{display: removeButton ? "none" : "visible"}} onClick={confirmBooking}>Confirm booking</button>
                <h4>{confirmedText}</h4>
                <h4>{confirmedIcon}</h4>

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
    function lastPickedAdditionalService(){
        return additionalService.slice(-1)
    }
    function lastPickedActivity(){
          return activity.slice(-1)
    }
    function confirmBooking(){
        submitOrder(currentUser,orderFriendDetails,activity,time,additionalService)
        console.log(submitOrder)
        setConfirmedIcon(<i class="fa-regular fa-face-smile fa-spin"></i>)
        setConfirmedText("Thank you for your order! When your order is confirmed you will see it on your profile page")
        setRemoveButton(!removeButton)
    }

}



















