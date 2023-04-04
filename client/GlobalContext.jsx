import  { createContext, useState, useEffect } from "react"

const GlobalContext = createContext(null)
export const GlobalProvider = ({ children }) => {

    const [friends, setFriends] = useState([])
    const [auth, setAuth] = useState({loggedIn: false})

    const [order, setOrder] = useState([])
    useEffect(() => {
        void checkAuth()
        void loadFriends()
    }, [])

    const loadFriends = async () => {
        const response = await fetch("/api/friends")
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
        const response =  await fetch("/api/login", {
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
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalContext;
