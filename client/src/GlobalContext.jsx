import {createContext, useState, useEffect} from "react"

const GlobalContext = createContext(null)
export const GlobalProvider = ({children}) => {
	const [order, setOrder] = useState([])
    const [friends, setFriends] = useState([])
    const [auth, setAuth] = useState({loggedIn: false})


    useEffect(() => {
        void checkAuth()
        void loadFriends()
    }, [])

    const loadFriends = async () => {
        const response = await fetch("/api/friends/")
        const result = await response.json()
        setFriends(result)
    }

    const checkAuth = async () => {
        const response = await fetch("/api/login")
        const result = await response.json()
        console.log('auth state: ', result)
        setAuth(result)
    }

    const submitLogin = async (email, password) => {
        const response = await fetch("/api/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        void checkAuth()
    }

    const submitOrder = async (user,friend) =>{

    }

    const logout = async () => {
        const response = await fetch('/api/login', {
            method: "DELETE"
        })
        const result = await response.json()
        console.log(result)
        setAuth({loggedIn: false})
    }

    const register = async (name, email, phonenumber, password, city) => {
        const response = await fetch("/api/users", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, email, phonenumber, password, city})
        })
        const result = await response.json()
        console.log(result)
    }


    /* const updatePassword = async () => {
         const response = await fetch(`/api/users/${userId}/password`, {
             method: 'PATCH',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify({oldPassword, newPassword}),
         });

         const result = await response.json()
         console.log(result)
     }*/

    return (
        <GlobalContext.Provider value={{
            friends,
            setFriends,
            auth,
            setAuth,
            submitLogin,
            logout,
   			order,
            setOrder
            register
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalContext;
