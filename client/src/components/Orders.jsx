import {useContext, useEffect} from "react";
import GlobalContext from "../GlobalContext.jsx";
import AdminOrderCard from "./AdminOrderCard.jsx";
import FriendCardDetailed from "./FriendCardDetailed.jsx";



export default function () {
    const {orders,auth,currentUser,getCurrentUser} = useContext(GlobalContext)

    useEffect( () => {
        getCurrentUser()
    }, [])

    console.log(currentUser)

    return <div>
      <h2>Orders</h2>
        {getUnconfirmedOrders()}
    </div>

function getUnconfirmedOrders(){
        const filteredOrders = orders.filter(order => {
            if (order.confirmed === false && auth.loggedIn && auth.email === "johnnyjohnson@example.com") {
                return true;
            } else if (order.confirmed === true && currentUser === order.user){
               console.log("true")
            }
        });

        return filteredOrders.map(order => <AdminOrderCard confirmOrder={order} />);
    }

}

