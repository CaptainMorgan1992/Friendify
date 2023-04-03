import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {Outlet} from "react-router-dom";
import header from './styles/headerNav.css'
import footer from "./styles/footer.css"
import FriendCardDetailed from "./styles/FriendCardDetailed.css"
import {GlobalProvider} from "../GlobalContext.jsx";
import Friends from "./components/Friends.jsx";
export default function(){


  return <GlobalProvider>
      <Header/>
      <Outlet/>
      <Footer/>
    </GlobalProvider>
}