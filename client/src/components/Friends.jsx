import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";
import FriendCard from "./FriendCard.jsx";
import {useParams} from "react-router-dom";

export default function (){
    const {friends} = useContext(GlobalContext)
    //const id = useParams().id
     //const findFriend = friends.find(friend => friend.id === parseInt(id))
    //console.log(findFriend)
    console.log(friends.id)

    return <div>

        {
            friends.map(friend => <FriendCard details={friend} key={friend.id}/>)//Ask about friends ID

        }

    </div>
}
