import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {Outlet} from "react-router-dom";
import header from './styles/headerNav.css'
import footer from "./styles/footer.css"
export default function(){


  return <>
    <Header/>
    <Outlet/>
    <Footer/>
  </>
}