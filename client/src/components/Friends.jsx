import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";
import FriendCard from "./FriendCard.jsx";
import {useParams} from "react-router-dom";
import "../styles/friendCardStartpage.css"

export default function (){
    const {friends} = useContext(GlobalContext)
    //const id = useParams().id
     //const findFriend = friends.find(friend => friend.id === parseInt(id))
    //console.log(findFriend)


    return <div id={"friend-card-wrapper"}>

        {
            friends.splice(0,3).map(friend => <FriendCard details={friend} key={friend.id}/>)//Ask about friends ID

        }
    </div>
}
