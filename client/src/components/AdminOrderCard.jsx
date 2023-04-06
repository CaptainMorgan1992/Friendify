import React, {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function ({confirmOrder}){
    const {activity, user,time,confirmed,_id, orderFriendDetails, friend} = confirmOrder;
    const {adminConfirmOrder} = useContext(GlobalContext)
    console.log(confirmOrder._id)
    return <div id={'detailed-friend-card'} >
        <p id="ageParagraph">{user}</p>
        <p id="priceParagraph">Duration: 2 hours</p>
        <p id="traitsParagraph">Activity:{activity}</p>
        <p id="traitsParagraph">Time: {time}</p>
        <p id="traitsParagraph">Confirmation: {confirmed}</p>
        <p id="traitsParagraph">ID: {_id}</p>
        <p id="traitsParagraph">FriendDetails: {}</p>
        <button onClick={sendConfirmation}>Confirm order</button>

    </div>

    function sendConfirmation(){
        console.log("Send confirmation")
        confirmOrder.confirmed = true
        console.log(confirmOrder.confirmed)
        adminConfirmOrder(_id,friend,user,activity,time,confirmed)
    }

}