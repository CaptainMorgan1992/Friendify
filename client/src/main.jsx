import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Startpage from "./pages/Startpage.jsx";
import Loginpage from "./pages/Loginpage.jsx";
import Profile from "./components/Profile.jsx";
import Settings from "./components/Settings.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={
            createBrowserRouter(createRoutesFromElements(
                    <Route path={'/'} element={<App/>}>
                        <Route index element={<Startpage/>}/>
                        <Route path={'login'} element={<Loginpage/>}/>
                        <Route path={'profile'} element={<Profile/>}>
                            <Route path={'settings'} element={<Settings/>}/>
                        </Route>

                        <Route/>

                            {/* <Route path={'register'} element={<Registrationpage/>}/>
                    <Route path={'profile'} element={<Profilepage/>}>
                    <Route path={'userprofile'} element={<Userprofilepage/>}/>
                    <Route path={'adminprofile'} element={<Adminprofilepage/>}/>
                    </Route> <Route path={'friends'} element={<Friendspage/>}/>
                    <Route path={'userrequest'} element={<Userrequestpage/>}/>
                    <Route path={'companyconfirmation'} element={<CompanyConfirmationpage/>}/>
                    </Route>*/}


                    </Route>
                )
            )
        }/>
    </React.StrictMode>,
)