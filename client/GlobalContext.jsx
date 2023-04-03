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
    const [activities, setActivities] = useState([])
    useEffect(() => {
        void loadActivities()
    }, [])

    const loadActivities = async (id) => {
        const response = await fetch("/api/activities/")
        const result = await response.json()
        console.log(response)
        console.log(result)
        setActivities(result)
    }


    return (
        <GlobalContext.Provider value={{
            friends,
            setFriends,
            activities,
            setActivities
        }} >
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalContext;
