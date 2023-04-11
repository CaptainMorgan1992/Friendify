import React, {useContext, useEffect, useState} from "react";
import FriendCard from "../components/FriendCard.jsx";
import "../styles/bookingconfirmation.css"
import GlobalContext from "../GlobalContext.jsx";
import FriendCardDetailed from "../components/FriendCardDetailed.jsx";
import OrderCard from "../components/UserOrderCard.jsx";

export default function () {
const {selectFriend} = useContext(GlobalContext)

    return <div>
        {
            selectFriend.map(orders => <OrderCard orderFriendDetails={orders}/>)
        }

    </div>



}












