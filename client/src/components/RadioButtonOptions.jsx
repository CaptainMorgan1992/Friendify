import React, {useContext} from "react";
import GlobalContext from "../../GlobalContext.jsx";

export default function () {
    const {activities, setActivities} = useContext(GlobalContext)

    return <div id="standing-area">
        <label>Choose an activity </label>
        <select value={activities} onChange={(e) => {
            const selectedValue = e.target.value;
            setActivities(selectedValue)
        }}>
            {
                activities.map(activity => <option value={activity.title}>{activity.title}</option>)
            }
        </select>
        <div id="button-div">
            <button className={"booking-confirmation-button"}> Hire friend</button>
        </div>

    </div>

}


/*
<option value="1">{activities[0].title}</option>
            <option value="2">{activities[1].title}</option>
            <option value="3">{activities[2].title}</option>


 {
            activities.map(activity => <p title={activity.title}>{activity.title}</p>)
        }
 */