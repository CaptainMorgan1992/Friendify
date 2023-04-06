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
     for (let i = 0; i<orders.length; i++){
             //console.log(orders[i].confirmed, orders[i].user)
         if (orders[i].confirmed === false && auth.loggedIn && auth.email === "johnnyjohnson@example.com"){
        return orders.map(order => <AdminOrderCard confirmOrder={order}/>)
         }
         else if(orders[i].confirmed === true && auth.loggedIn){
             return orders.map(order => <AdminOrderCard confirmOrder={order}/>)
         }
     }
     }
}
