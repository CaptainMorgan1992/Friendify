import React, {useContext, useState} from "react";
import GlobalContext from "../GlobalContext.jsx";
import {Link} from "react-router-dom";
import "../styles/registerfriend.css"

export default function () {
    const {registerFriend} = useContext(GlobalContext)
    const [traits, setTrait] = useState("")
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [price, setPrice] = useState("");
    const [picture, setPicture] = useState("");
    const [city, setCity] = useState("");


    const postFriend = (e) => {
        e.preventDefault()
        if (!name || !age || !price || !picture || !city) {
            return console.log('Fields cannot be empty!');
        }
        registerFriend(traits, name, age, price, picture, city)
        showConfirmation()
    }


    function ShowConfirmation () {
        if (name, age, price, picture, city) {
            return <p id={"confirmation-text"}>Your friend has successfully been added to our database</p>
        }
        else return <p id={"confirmation-text"}>You must fill in all details before you can add a friend</p>
    }


    return <>
        <h2 id={"h1-registerFriend"}>Add a new friend</h2>
        <div className={"container"}>

            <form onSubmit={postFriend}>
                <h4 className={"h4-addfriend"}>Name</h4>
                <input placeholder={'Name'}
                       type={'name'}
                       value={name}
                       onChange={e => setName(e.target.value)}/>

                <h4 className={"h4-addfriend"}>Traits</h4>
                <input placeholder={'Traits'}
                       type={'traits'}
                       value={traits}
                       onChange={e => setTraits(e.target.value)}/>

                <h4 className={"h4-addfriend"}>Age</h4>
                <input placeholder={'Age'}
                       type={'number'}
                       value={age}
                       onChange={e => setAge(e.target.value)}/>

                <h4 className={"h4-addfriend"}>Picture</h4>
                <input placeholder={'Picture (Enter URL)'}
                       type={'picture'}
                       value={picture}
                       onChange={e => setPicture(e.target.value)}/>

                <h4 className={"h4-addfriend"}>Price</h4>
                <input placeholder={'Price'}
                       type={'price'}
                       value={price}
                       onChange={e => setPrice(e.target.value)}/>

                <h4 className={"h4-addfriend"}>City</h4>
                <input placeholder={'City'}
                       type={'text'}
                       value={city}
                       onChange={e => setCity(e.target.value)}/>


                    <button type={'submit'}>Register Friend</button>
                <ShowConfirmation/>
            </form>
        </div>
    </>
}