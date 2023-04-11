import React, {useContext, useState} from "react";
import GlobalContext from "../GlobalContext.jsx";
import {useParams} from "react-router-dom";

export default function () {
    const {deleteFriend} = useContext(GlobalContext)
    const [message, setMessage] = useState(" ")


    function handleDeletion() {
        setMessage("You have successfully deleted the friend from the database")
    }

    const deleteFriendFromDatabase = (e) => {
        e.preventDefault()
        deleteFriend()
        handleDeletion()
    }


    return <div id="button-div">
        <form onSubmit={deleteFriendFromDatabase}>
            <button type={'submit'} className={"booking-confirmation-button"}>Delete Friend</button>
        </form>
        <p>{message}</p>
    </div>
}