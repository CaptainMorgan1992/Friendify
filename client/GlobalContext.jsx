import  { createContext, useState, useEffect } from "react"

const GlobalContext = createContext(null)
export const GlobalProvider = ({ children }) => {

    const [friends, setFriends] = useState([])
    useEffect(() => {
        void loadFriends()
    }, [])

    const loadFriends = async (id) => {
        const response = await fetch("/api/friends/")
        const result = await response.json()
        console.log(response)
        console.log(result)
        setFriends(result)
    }


    return (
        <GlobalContext.Provider value={{
            friends,
            setFriends,
        }} >
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalContext;
