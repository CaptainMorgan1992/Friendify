import React, {useContext, useEffect, useState} from "react";
import GlobalContext from "../GlobalContext.jsx";
import {useParams} from "react-router-dom";

export default function ({_id}) {
    const {deleteFriend, friends, loadFriends} = useContext(GlobalContext)
    const [message, setMessage] = useState(" ")
    useEffect ( () => {
        loadFriends();
    }, [])


    function handleDeletion() {
        setMessage("You have successfully deleted the friend from the database")
    }

    const deleteFriendFromDatabase = () => {
        //console.log(e.target.value())
        deleteFriend(_id)
        handleDeletion()
    }


    return <div id="button-div">
        <form onSubmit={deleteFriendFromDatabase}>
            <button type={'submit'} className={"booking-confirmation-button"}>Delete Friend</button>
        </form>
        <p>{message}</p>
    </div>
}