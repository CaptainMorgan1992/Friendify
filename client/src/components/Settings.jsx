import React, {useContext, useEffect, useState} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function () {
    const {currentUser, setCurrentUser, updateInfo, getCurrentUser, auth} = useContext(GlobalContext)

    useEffect( () => {
        getCurrentUser()
    }, [])

    const updateUser = (e) => {
        e.preventDefault()
        if (!currentUser) {
            return console.log('fields cannot be empty!');
        }
        updateInfo(currentUser)
        console.log(currentUser)
    }
    
    return !currentUser ? null: <>
        <h1>Update Account</h1>
            <form onSubmit={updateUser}>
                <input placeholder={'Name'}
                       type={'name'}
                       value={currentUser.name}
                       onChange={e => setCurrentUser(e.target.value)}/>

                <input placeholder={'Email'}
                       type={'email'}
                       value={currentUser.email}
                       onChange={e => setCurrentUser(e.target.value)}/>

                <input placeholder={'Phonenumber'}
                       type={'number'}
                       value={currentUser.phonenumber}
                       onChange={e => setCurrentUser(e.target.value)}/>

                <input placeholder={'********'}
                       type={'password'}
                       value={currentUser.password}
                       onChange={e => setCurrentUser(e.target.value)}/>


                <input placeholder={'city'}
                       type={'text'}
                       value={currentUser.city}
                       onChange={e => setCurrentUser(e.target.value)}/>

                <button type={'submit'}>Update</button>
            </form>
    </>
}
