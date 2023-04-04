import friends from "./Friends.jsx";
import {useContext} from "react";
import GlobalContext from "../../GlobalContext.jsx";
import {json} from "react-router-dom";
import React, {useState} from "react"
import RadioButtonOptions from "./RadioButtonOptions.jsx";


export default function ({details}) {
    const {name, age, picture, city, id, traits, price} = details;
    const {friends} = useContext(GlobalContext)
    return <div id={'detailed-friend-card'}>
        <h2>{name}</h2>
        <img id="detailedPicture" src={picture}/>
        <p id="ageParagraph">{age}</p>
        <p id="cityParagraph">{city}</p>
        <p id="priceParagraph">Price per 2 hrs{price}</p>
        <p id="traitsParagraph">{traits}</p>
        <RadioButtonOptions/>
    </div>
}

