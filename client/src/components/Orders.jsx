import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";
import AdminOrderCard from "./AdminOrderCard.jsx";



export default function () {
    const {orders,auth} = useContext(GlobalContext)
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

        return filteredOrders.map(order => <AdminOrderCard confirmOrder={order} />);
    }
}

