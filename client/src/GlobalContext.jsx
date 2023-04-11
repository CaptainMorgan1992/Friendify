import {createContext, useState, useEffect} from "react"

const GlobalContext = createContext(null)
export const GlobalProvider = ({children}) => {
	const [orders, setOrders] = useState([])
	const [selectFriend, setSelectFriend] = useState([])
    const [activity, setActivity] = useState([])
    const [time, setTime] = useState([])
    const [friends, setFriends] = useState([])
    const [currentUser, setCurrentUser] = useState(null)
    const [checkUser, setCheckUser] = useState([])
    const [auth, setAuth] = useState({loggedIn: false})
    const [additionalService, setAdditionalService] = useState([])


    useEffect(() => {
        void checkAuth()
        void loadFriends()
        void loadOrders()
    }, [])

    const loadFriends = async () => {
        const response = await fetch("/api/friends/")
        const result = await response.json()
        setFriends(result)
    }
    const getCurrentUser = async () =>{
        const response = await fetch('/api/users/current')
        const result = await response.json()
        setCurrentUser(result)
    }

    const loadOrders = async () =>{
        const response = await fetch('/api/orders')
        const result = await response.json()
        setOrders(result)
        console.log(result)
    }

    const checkAuth = async () => {
        const response = await fetch("/api/login")
        const result = await response.json()
        console.log('auth state: ', result)
        setAuth(result)
        console.log(result)
        checkUser.push(result.name)
    }

    const submitLogin = async (email, password) => {
        const response = await fetch("/api/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        console.log(response)
        void checkAuth()
        void getCurrentUser()
    }

    const submitOrder = async (user,friend,activity,time) =>{
        const response = await fetch("/api/orders", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user,friend,activity,time})
        })
        const result = response.json()
        console.log(result)
    }

    const adminConfirmOrder = async (_id,friend, user,activity,time,confirmed) =>{
        const response = await fetch(`/api/orders/${_id}`, {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({_id,friend,user,activity,time,confirmed})
        })
        const result = response.json()
        console.log(result)
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
        const response = await fetch(`/api/users`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, email, phonenumber, password, city})
        })
        const result = await response.json()
        console.log(result)
    }


    const updateInfo = async (currentUser) => {
        console.log(currentUser)
        const response = await fetch(`/api/users/${currentUser._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(currentUser)
        })
        console.log(response)
        const result = await response.json()
        console.log(result)
    }


    const registerFriends = async (traits, name, age, price, picture, city) => {
        const response = await fetch("/api/friends", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({traits, name, age, price, picture, city})
        })
        const result = await response.json()
        console.log(result)
    }

    const deleteFriend = async (id) => {
            const response = await fetch(`/api/friends/${id}`, {
                method: "DELETE"
            }).
            then(response => {
                if (!response.ok) {
                    console.log("failed to delete item")
                }
                console.log('item deleted successfully')
            }).
            catch(error => {
                console.log("Error deleting item")
            })
    }


    return (
        <GlobalContext.Provider value={{
            friends,
            setFriends,
            auth,
            setAuth,
            submitLogin,
            logout,
   			orders,
            setOrders,
            selectFriend,
            activity,
            setActivity,
            time,
            setTime,
            checkUser,
            setCheckUser,
            register,
			registerFriends,
            submitOrder,
            adminConfirmOrder,
			additionalService,
            setAdditionalService, 
			updateInfo,
            currentUser,
            setCurrentUser,
            getCurrentUser,
			deleteFriend
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalContext;
