import  { createContext, useState, useEffect } from "react"

const GlobalContext = createContext(null)
export const GlobalProvider = ({ children }) => {

    const [friends, setFriends] = useState([])
    const [auth, setAuth] = useState({loggedIn: false})

    useEffect(() => {
        void checkAuth()
        void loadFriends()
    }, [])

    const loadFriends = async (id) => {
        const response = await fetch("/api/friends/")
        const result = await response.json()
        console.log(result)
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

    const logout = async () => {
        const response = await fetch('/api/login', {
            method: "DELETE"
        })
        const result = await response.json()
        console.log(result)
        setAuth({loggedIn: false})
    }

    const updateInfo = async (id, email, password) => {
        const response = await fetch('/api/users/password', {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id, email, password})
        })

        const result = await response.json()
        console.log(result)
    }

    return (
        <GlobalContext.Provider value={{
            friends,
            setFriends,
            auth,
            setAuth,
            submitLogin,
            logout,
            updateInfo
        }} >
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalContext;
