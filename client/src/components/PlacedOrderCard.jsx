import React, {useContext, useEffect, useState} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function ({confirmOrder}){
    const {friend,user,activity,time,confirmed,_id, additionalService} = confirmOrder;
    const {adminConfirmOrder,getCurrentUser,currentUser} = useContext(GlobalContext)
    const [adminConfirm, setAdminConfirm] = useState(confirmed)
   
    useEffect( () => {
        getCurrentUser()
    }, [])

    return <div id={'detailed-friend-card'} >
        <p id="priceParagraph">Duration: 2 hours</p>
        <p id="traitsParagraph">Activities:{activity[activity.length-1]}</p>
        <p id="traitsParagraph">Extra Services: {additionalService[additionalService.length-1]}</p>
        <p id="traitsParagraph">Date & Time: {time}</p>
        <p id="traitsParagraph">orderID: {_id}</p>
        <p id="traitsParagraph">Accepted: {adminConfirm.toString()}</p>
        <ul className={'placedOrder'}>
            {friend.map((friendItem) => (
                <li key={friendItem._id}>
                    <h3>Friend</h3>
                    <img id={'detailedPicture'} src={friendItem.picture} alt={friendItem.name} />
                    <p>Name: {friendItem.name}</p>
                    <p>Price: {friendItem.price}</p>
                    <p>City: {friendItem.city}</p>

                </li>
            ))}
            <ul className={'placedOrder'}>
                {user && user.map((userItem) => (
                    <li key={userItem && userItem._id}>
                        <h3>User</h3>
                        <p>Name: {userItem && userItem.name}</p>
                        <p>Email: {userItem && userItem.email}</p>
                        <p>Phonenumber: {userItem && userItem.phonenumber}</p>
                        <p>City: {userItem && userItem.city}</p>
                    </li>
                ))}

            </ul>
        </ul>
        {ConfirmButton()}
    </div>


    function ConfirmButton(){
            if (currentUser.admin) {
                return <div>
                    <button onClick={sendConfirmation}>Confirm Order</button>
                </div>
            }
    }

    function sendConfirmation(){
        console.log("Send confirmation")
        setAdminConfirm(true)
        adminConfirmOrder(_id,friend,user,activity,time,true)
        console.log(_id,friend,user,activity,time,true)
    }

}