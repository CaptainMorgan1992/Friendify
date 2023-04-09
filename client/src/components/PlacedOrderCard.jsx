import React, {useContext, useState} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function ({confirmOrder}){
    const {friend,user,activity,time,confirmed} = confirmOrder;
    const {adminConfirmOrder,order} = useContext(GlobalContext)
    const [adminConfirm, setAdminConfirm] = useState(confirmed)
    return <div id={'detailed-friend-card'} >
        <p id="priceParagraph">Duration: 2 hours</p>
        <p id="traitsParagraph">Activity:{activity}</p>
        <p id="traitsParagraph">Time: {time}</p>
        <p id="traitsParagraph">Confirmation: {adminConfirm.toString()}</p>
        <ul>
            {friend.map((friendItem) => (
                <li key={friendItem._id}>
                    <h3>Friend</h3>
                    <p>Name: {friendItem.name}</p>
                    <p>Price: {friendItem.price}</p>
                    <p>City: {friendItem.city}</p>
                    <p>FriendID: {friendItem._id}</p>
                    <img src={friendItem.picture} alt={friendItem.name} />
                </li>
            ))}
            <ul>
                {user && user.map((userItem) => (
                    <li key={userItem && userItem._id}>
                        <h3>User</h3>
                        <p>Name: {userItem && userItem.name}</p>
                        <p>Email: {userItem && userItem.email}</p>
                        <p>Phonenumber: {userItem && userItem.phonenumber}</p>
                        <p>City: {userItem && userItem.city}</p>
                        <p>UserID: {userItem && userItem._id}</p>
                    </li>
                ))}

            </ul>
        </ul>
        <button onClick={sendConfirmation}>Confirm order</button>
    </div>

    function sendConfirmation(){
        console.log("Send confirmation")
        //confirmOrder.confirmed = true
        setAdminConfirm(true)
        //adminConfirmOrder(friend,user,activity,time,true)
        console.log(friend,user,activity,time,true)
    }

}