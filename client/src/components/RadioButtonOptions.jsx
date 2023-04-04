import React, {useContext} from "react";
import GlobalContext from "../../GlobalContext.jsx";
import {Link} from "react-router-dom";

export default function () {
    const {activity, setActivity} = useContext(GlobalContext)
    const {friends} = useContext(GlobalContext)
    return <div id="standing-area">
      <DropDownMenu/>
        <div id="button-div">
            <Link to={'/userconfirmation'}>
            <button onClick={hireFriend} type={"submit"} className={"booking-confirmation-button"}>Hire friend</button>
            </Link>
        </div>
    </div>
    function DropDownMenu(){
        return <select onChange={chooseActivity}>
                <option>Select a value</option>
                <option>Fika</option>
                <option>Simma</option>
                <option>Springa</option>
        </select>
    }
    function chooseActivity(e){
        e.preventDefault()
        activity.push(e.target.value)
        console.log(activity)
    }
    function hireFriend(){
        console.log("testtestesttest")
        activity.push(friends.name)
        console.log(activity)
    }
}







/*
<option value="1">{activities[0].title}</option>
            <option value="2">{activities[1].title}</option>
            <option value="3">{activities[2].title}</option>


 {
            activities.map(activity => <p title={activity.title}>{activity.title}</p>)
        }
 */