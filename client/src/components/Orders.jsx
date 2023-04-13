import {useContext, useEffect} from "react";
import GlobalContext from "../GlobalContext.jsx";
import PlacedOrderCard from "./PlacedOrderCard.jsx";



export default function () {
    const {orders,auth,getCurrentUser,currentUser} = useContext(GlobalContext)
    useEffect( () => {
        getCurrentUser()
    }, [])


    return <div>
      <h2><ShowTitle/></h2>
        {getUnconfirmedOrders()}
        {getUsersConfirmedOrders()}
    </div>


    function ShowTitle() {
        const currentUserCopy = {...currentUser}
        if (currentUserCopy && currentUserCopy.admin && auth.loggedIn) {
            return  <div>
                <h3 className={'profile-name'}>{currentUserCopy.name}</h3>
                <h1 className={'profile-order'}>Unconfirmed orders</h1>
            </div>
        } else if(currentUserCopy && !currentUserCopy.admin && auth.loggedIn){
            return  <div>
                <h3 className={'profile-name'}>Welcome {currentUserCopy.name}</h3>
                <h1 className={'profile-order'}>My orders</h1>
            </div>
        }
    }
function getUnconfirmedOrders(){
        const filteredOrders = orders.filter(order => {
            if (order.confirmed === false &&
                auth.loggedIn &&
               currentUser && currentUser.admin) {
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
                  currentUser && !currentUser.admin &&
                    order.user.some((user) => user._id === currentUser._id)
                );
            });
            return filteredOrders.map((order) => (
                <PlacedOrderCard confirmOrder={order} />
            ));
        }

}





