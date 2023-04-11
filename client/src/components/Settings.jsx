import React, {useContext, useEffect, useState} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function () {
    const {currentUser, setCurrentUser, updateInfo, getCurrentUser} = useContext(GlobalContext)

    useEffect(() => {
        getCurrentUser()
    }, [])

    const setCurrentUserProp = (obj) => {
        let user = {}
        for(let prop in currentUser){
            if(obj[prop]){
                user[prop] = obj[prop]
            }else{
                user[prop] = currentUser[prop]
            }
        }
        setCurrentUser(user)
        console.log(currentUser)
    }

    const updateUser = (e) => {
        e.preventDefault()
        if (!currentUser) {
            return console.log('fields cannot be empty!');
        }
        console.log(currentUser._id)
        updateInfo(currentUser)
    }

    return !currentUser ? null : <>
        <h1>Update Account</h1>
        <form onSubmit={updateUser}>
            <input placeholder={'Name'}
                   type={'name'}
                   value={currentUser.name}
                   onChange={e => setCurrentUserProp({name: e.target.value})}/>

            <input placeholder={'Email'}
                   type={'email'}
                   value={currentUser.email}
                   onChange={e => setCurrentUserProp({email:e.target.value})}/>

            <input placeholder={'Phonenumber'}
                   type={'number'}
                   value={currentUser.phonenumber}
                   onChange={e => setCurrentUserProp({phonenumber: e.target.value})}/>

            <input placeholder={'********'}
                   type={'password'}
                   value={currentUser.password}
                   onChange={e => setCurrentUserProp({password : e.target.value})}/>


            <input placeholder={'city'}
                   type={'text'}
                   value={currentUser.city}
                   onChange={e => setCurrentUserProp({city: e.target.value})}/>

            <button type={'submit'}>Update</button>
        </form>
    </>
}
