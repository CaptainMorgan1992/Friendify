import React, {useContext, useState} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function ({confirmOrder}){
    const {_id,friend,user,activity,time,confirmed} = confirmOrder;
    const {adminConfirmOrder,orders} = useContext(GlobalContext)
    const [adminConfirm, setAdminConfirm] = useState(confirmed)
    return <div id={'detailed-friend-card'} >
        <p id="ageParagraph">User: {user}</p>
        <p id="priceParagraph">Duration: 2 hours</p>
        <p id="traitsParagraph">Activity:{activity}</p>
        <p id="traitsParagraph">Time: {time}</p>
        <p id="traitsParagraph">Confirmation: {adminConfirm.toString()}</p>
        <p id="traitsParagraph">ID: {_id}</p>
        <p id="traitsParagraph">FriendDetails: {}</p>
        <button onClick={sendConfirmation}>Confirm order</button>
    </div>

    function sendConfirmation(){
        console.log("Send confirmation")
        //confirmOrder.confirmed = true
        setAdminConfirm(true)
        adminConfirmOrder(_id,friend,user,activity,time,true)
    }

}