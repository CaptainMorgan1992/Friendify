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

        console.log("Send confirmation")
        console.log(confirmOrder) //splice it
        for(let i = -1; i<confirmOrder.length; i++){
            console.log(confirmOrder[i])
        }


    }

}