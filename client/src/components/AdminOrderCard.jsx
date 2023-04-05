import React, {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function ({confirmOrder}){
    const {activity, user, city, price, } = confirmOrder;

    return <div id={'detailed-friend-card'} >
        <p id="ageParagraph">{user}</p>
        <p id="priceParagraph">{price}kr</p>
        <p id="priceParagraph">Duration: 2 hours</p>
        <p id="traitsParagraph">{activity}</p>
        <p id="traitsParagraph">{city}</p>
        <p id="traitsParagraph">{price}</p>
        <button onClick={sendConfirmation}>Confirm order</button>

    </div>

    function sendConfirmation(){
        //To be able to send confirmation we should oo it like this: When i press this button the card is sent to the database
        //The card confirmed then === true. If it is true it can get mapped out on the userProfile(the one who is not an admin)
        //Right now the confirmation is after the user clicks "confirm". Instead of showing the card, I should just show
        //"thank you for your confirmation". After the admin has clicked "confirm order", the user can see the ordercard in their profile
        console.log("Send confirmation")
        console.log(confirmOrder) //splice it
        for(let i = -1; i<confirmOrder.length; i++){
            console.log(confirmOrder[i])
        }


    }

}