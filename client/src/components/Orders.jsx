import {useContext, useEffect} from "react";
import GlobalContext from "../GlobalContext.jsx";
import PlacedOrderCard from "./PlacedOrderCard.jsx";



export default function () {
    const {orders,auth,getCurrentUser,currentUser} = useContext(GlobalContext)
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
            if (order.confirmed === false &&
                auth.loggedIn &&
                currentUser.admin) {
                return true;
            }
        });
        return filteredOrders.map(order => <PlacedOrderCard confirmOrder={order}/>);

    }

    function getUsersConfirmedOrders() {
            const filteredOrders = orders.filter((order) => {
                return (
                    order.confirmed === true &&
                    auth.loggedIn &&
                    !currentUser.admin &&
                    order.user.some((user) => user._id === currentUser._id)
                );
            });
            return filteredOrders.map((order) => (
                <PlacedOrderCard confirmOrder={order} />
            ));
        }

}





