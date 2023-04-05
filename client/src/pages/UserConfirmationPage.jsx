import React, {useContext, useEffect, useState} from "react";
import FriendCard from "../components/FriendCard.jsx";
import "../styles/bookingconfirmation.css"
import GlobalContext from "../GlobalContext.jsx";
import FriendCardDetailed from "../components/FriendCardDetailed.jsx";
import OrderCard from "../components/OrderCard.jsx";

export default function () {
const {order} = useContext(GlobalContext)
    return <div>
        {
            order.map(orders => <OrderCard orderDetails={orders}/>)
        }
    </div>



}












