import React, {useContext, useEffect, useState} from "react";
import "../styles/bookingconfirmation.css"
import GlobalContext from "../GlobalContext.jsx";


export default function ({orderDetails}) {
    const {activity, checkUser, submitOrder, additionalService} = useContext(GlobalContext)
    const [timer, setTimer] = useState()
    const [confirmed, setConfirmed] = useState()
    //const [booked, setBooked] = useState(new Date())
    const {name,picture, city, price} = orderDetails;
    let {additionalServicePrice} = calcPrice();

    useEffect(() => {

    }, []);
    return <div id={'confirmation-div'}>
            <h2>Confirm your booking</h2>
        <img id="detailedPicture" alt={"picture of a friend"} src={picture}/>
            <div id='confirmation-details'>
                <h3 id={'booking-details'}>Booking details</h3>
                <h4>Your friend: {name}</h4>
                {activity.map(a => <h4>Your activity: {a}</h4>)}
                <h4>Location:{city}</h4>
                {additionalService.map(s => <h4>Your additional service: {s}</h4>)}
                {checkUser.map(user => <h4>Booked by {user}</h4>)}
                <h4>Need help?: Call 042-222-33-22</h4>
                <h4>Total cost: {price + additionalServicePrice}kr </h4>
                <h4>Duration: 2 hours </h4>
                <button onClick={confirmBooking}>Confirm booking</button>
                <h4>Time until arrival:{timer} </h4>
                <h4>{confirmed}</h4>
            </div>
        </div>



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
    function confirmBooking(){
        submitOrder(checkUser,orderDetails,activity)
        console.log(submitOrder)
        setTimer(40)
        setConfirmed("Your booking has been confirmed")
        //setBooked(new Date().getMonth())
        const intervalId = setInterval(() => {
            setTimer(timer => timer - 1);
        }, 60000);

        if(timer === 0){
            return () => clearInterval(intervalId);
        }



    }

}



















