import FriendCardDetailed from "../components/FriendCardDetailed.jsx";
import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";
import FriendCard from "../components/FriendCard.jsx";
import "../styles/FriendCardDetailed.css"


export default function (){
    const {friends} = useContext(GlobalContext)
    return <div>
        {
            friends.map(friend => <FriendCardDetailed friendDetails={friend} key={friend.id}/>)//Ask about friends ID
        }

    </div>
}

