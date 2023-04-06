import React, {useContext, useEffect, useState} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function ({userId}) {
    const {updateInfo} = useContext(GlobalContext)
    const [user,setUser] = useState('')


    useEffect( () => { const fetchUser = async () =>{
            const response = await fetch(`api/users/${userId}`)
            const result = await response.json()
            setUser(result)
        };
        fetchUser()
    }, [userId])


    const updateUser = (e) => {
        e.preventDefault()
        if (!user) {
            return console.log('fields cannot be empty!');
        }
        updateInfo(userId, user)
        console.log(user)
    }


    return <>
        <h1>Update Account</h1>
            <form onSubmit={updateUser}>
                <input placeholder={'Name'}
                       type={'name'}
                       value={user.name}
                       onChange={e => setUser(e.target.value)}/>

                <input placeholder={'Email'}
                       type={'email'}
                       value={user.email}
                       onChange={e => setUser(e.target.value)}/>

                <input placeholder={'Phonenumber'}
                       type={'number'}
                       value={user.phonenumber}
                       onChange={e => setUser(e.target.value)}/>

                <input placeholder={'********'}
                       type={'password'}
                       value={user.password}
                       onChange={e => setUser(e.target.value)}/>

                <input placeholder={'city'}
                       type={'text'}
                       value={user.city}
                       onChange={e => setUser(e.target.value)}/>

                <button type={'submit'}>Update</button>
            </form>
    </>
}
