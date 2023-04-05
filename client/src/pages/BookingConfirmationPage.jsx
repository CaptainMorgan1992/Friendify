import React, {useContext, useEffect, useState} from "react";
import FriendCard from "../components/FriendCard.jsx";
import "../styles/bookingconfirmation.css"
import GlobalContext from "../GlobalContext.jsx";
import FriendCardDetailed from "../components/FriendCardDetailed.jsx";

export default function () {
    const {order} = useContext(GlobalContext)
    return <div>
        {
            order.map(orders => <FriendCardDetailed details={orders}/>)//Ask about friends ID
        }



        <div id={'confirmation-div'}>
            <h2>Booking confirmed!</h2>
            <img id={'confirmation-image'} src="https://i.pinimg.com/736x/02/d8/c8/02d8c89ffe273e093d06036f49ed8302.jpg" alt=""/>
            <div id='confirmation-details'>
                <h3 id={'booking-details'}>Booking details</h3>
                <h4>Your friend: Leo Günther </h4>
                <h4>Activity: Crying</h4>
                <h4>Location: On a park bench</h4>
                <h4>Duration: 2 hrs </h4>
                <h4>Booked by: Rebecca Abel</h4>
                <h4>Contact: rebeccaabel@hotmail.se</h4>

                <h4>Total cost: 350 kr </h4>

            </div>
        </div>
    </div>
}















