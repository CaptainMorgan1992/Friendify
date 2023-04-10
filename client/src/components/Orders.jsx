import {useContext, useEffect} from "react";
import GlobalContext from "../GlobalContext.jsx";
import AdminOrderCard from "./PlacedOrderCard.jsx";
import FriendCardDetailed from "./FriendCardDetailed.jsx";
import PlacedOrderCard from "./PlacedOrderCard.jsx";



export default function () {
    const {orders,auth,getCurrentUser,currentUser} = useContext(GlobalContext)
    console.log(orders)
    console.log(currentUser)
    useEffect( () => {
        getCurrentUser()
    }, [])
    return <div>
      <h2>Orders</h2>
        {getUnconfirmedOrders()}
        {getUsersConfirmedOrders()}
    </div>

function getUnconfirmedOrders(){
        const filteredOrders = orders.filter(order => {
            if (order.confirmed === false && auth.loggedIn && auth.email === "johnnyjohnson@example.com") {
                return true;
            }
        });

        return filteredOrders.map(order => <PlacedOrderCard confirmOrder={order}/>);

    }

    function getUsersConfirmedOrders() {
        const filteredOrders = orders.filter(order => {
            console.log(order.user._id)
            console.log(currentUser._id)
            if (order.confirmed === true && order.user._id === currentUser._id) {
                return true;
            }
            return false;
        });

        return filteredOrders.map(order => <PlacedOrderCard confirmOrder={order}/>);
    }


}



