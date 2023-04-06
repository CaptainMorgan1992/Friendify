import {createContext, useState, useEffect} from "react"

const GlobalContext = createContext(null)
export const GlobalProvider = ({children}) => {
	const [orders, setOrders] = useState([])
	const [selectFriend, setSelectFriend] = useState([])
    const [activity, setActivity] = useState([])
    const [duration, setDuration] = useState([])
    const [friends, setFriends] = useState([])
    const [users, setUsers] = useState([])
    const [checkUser, setCheckUser] = useState([])
    const [auth, setAuth] = useState({loggedIn: false})


    useEffect(() => {
        void checkAuth()  // This code calls the authentication twice. Not needed? /M
        void loadFriends()
        void loadUsers()
        void loadOrders()
    }, [])

    const loadFriends = async () => {
        const response = await fetch("/api/friends/")
        const result = await response.json()
        setFriends(result)
    }
    const loadUsers = async () =>{
        const response = await fetch('/api/users')
        const result = await response.json()
        setUsers(result)
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
        checkUser.push(result.name)
    }

    const submitLogin = async (email, password) => {
        const response = await fetch("/api/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        void checkAuth()
    }

    const submitOrder = async (user,friend, activity,location,duration) =>{
        const response = await fetch("/api/orders", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user,friend, activity,location,duration})
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
        const response = await fetch("/api/users", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, email, phonenumber, password, city})
        })
        const result = await response.json()
        console.log(result)
    }

    const registerFriend = async (traits, name, age, price, picture, city) => {
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
            users,
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
            duration,
            setDuration,
            checkUser,
            setCheckUser,
            register,
			registerFriend,
            submitOrder,
            deleteFriend
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalContext;
