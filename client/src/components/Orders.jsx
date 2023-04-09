import {useContext, useEffect} from "react";
import GlobalContext from "../GlobalContext.jsx";
import AdminOrderCard from "./PlacedOrderCard.jsx";
import FriendCardDetailed from "./FriendCardDetailed.jsx";
import PlacedOrderCard from "./PlacedOrderCard.jsx";



export default function () {
    const {orders,auth,getCurrentUser,currentUser} = useContext(GlobalContext)

    useEffect( () => {
        getCurrentUser()
    }, [])

    return <div>
      <h2>Orders</h2>
        {getUnconfirmedOrders()}
    </div>

function getUnconfirmedOrders(){
        const filteredOrders = orders.filter(order => {
            if (order.confirmed === false && auth.loggedIn && auth.email === "johnnyjohnson@example.com") {
                return true;
            }
        });

        return filteredOrders.map(order => <PlacedOrderCard confirmOrder={order}/>);
    }

/*function getUsersConfirmedOrders(){
    const filteredOrders = orders.filter(order => {
        if (order.confirmed === true && currentUser) {
            return true;
        }
    });

    return filteredOrders.map(order => <AdminOrderCard confirmOrder={order}/>);
}
}*/
}

