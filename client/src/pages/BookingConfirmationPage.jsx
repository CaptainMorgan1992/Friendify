import {useContext} from "react";
import GlobalContext from "../../GlobalContext.jsx";
import FriendCard from "../components/FriendCard.jsx";
import FriendCardDetailed from "../components/FriendCardDetailed.jsx";

export default function () {
    const {activity, setActivity} = useContext(GlobalContext)
    console.log(activity.map(a => <FriendCard details={activity}/>))
    return <div>

        {
            activity.map(a => <FriendCard details={activity}/>)//Ask about friends ID
        }

    </div>
}