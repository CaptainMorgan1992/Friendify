import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {Outlet} from "react-router-dom";
import {GlobalProvider} from "./GlobalContext.jsx";


export default function(){


  return <GlobalProvider>
      <Header/>
      <Outlet/>
      <Footer/>
    </GlobalProvider>
}