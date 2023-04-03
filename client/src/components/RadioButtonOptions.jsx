import {React, useState, useEffect, useContext} from "react";
import GlobalContext from "../../GlobalContext.jsx";

export default function ({details}) {
    let {activities, setActivities} = useContext(GlobalContext)
    //const {title, duration} = details
console.log(
    activities.map(activity => <input title={activity.title} type={"radio"}></input>))

    return <div>
        {
            activities.map(activity => <p title={activity.title}>{activity.title}</p>)
        }
    </div>

}
