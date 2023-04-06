import {useContext} from "react";
import GlobalContext from "../GlobalContext.jsx";
import AdminOrderCard from "./AdminOrderCard.jsx";



export default function () {
    const {orders,auth} = useContext(GlobalContext)

    return <div>
      <h2>Orders</h2>
        {
            
        }
        {getUnconfirmedOrders()}
    </div>

function getUnconfirmedOrders(){
     for (let i = 0; i<orders.length; i++){
         if (orders[i].confirmed === false && auth.loggedIn){
        return orders.map(order => <AdminOrderCard confirmOrder={order}/>)
         }
     }
}

}
