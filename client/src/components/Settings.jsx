import {useContext, useState} from "react";
import GlobalContext from "../GlobalContext.jsx";

export default function ({userId}) {
    const {updatePassword} = useContext(GlobalContext)
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const updateThePassword = (e) => {
        e.preventDefault()
        if (newPassword !== confirmPassword) {
            console.log('Passwords do not match.');
        }
        updatePassword()
        console.log('FUNGERAR DETTA')
    }


    return <form onSubmit={updateThePassword}>

        <input placeholder={'Current Password'}
               type={'password'}
               value={oldPassword}
               onChange={e => setOldPassword(e.target.value)}/>

        <input placeholder={'New Password'}
               type={'password'}
               value={newPassword}
               onChange={e => setNewPassword(e.target.value)}/>

        <input placeholder={'Confirm New Password'}
               type={'password'}
               value={confirmPassword}
               onChange={e => setConfirmPassword(e.target.value)}/>

        <button type={'submit'}>Update Password</button>

    </form>

}