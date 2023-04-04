import {useContext, useState} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function () {
   // const {updateInfo} = useContext(GlobalContext)
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');


    const updatePassword = (e) => {
        e.preventDefault()
        console.log('FUNGERAR DETTA')
    }



    return <form onSubmit={updatePassword}>

        <input placeholder={'Current Password'}
               type={'password'}
               value={currentPassword}
               onChange={e => setCurrentPassword(e.target.value)}/>

        <input placeholder={'New Password'}
               type={'password'}
               value={newPassword}
               onChange={e => setNewPassword(e.target.value)}/>

        <input placeholder={'Confirm New Password'}
               type={'password'}
               value={confirmNewPassword}
               onChange={e => setConfirmNewPassword(e.target.value)}/>

        <button type={'submit'}>Update Password</button>

    </form>

}