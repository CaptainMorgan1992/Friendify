import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Startpage from "./pages/Startpage.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={
            createBrowserRouter(createRoutesFromElements(
                    <Route path={'/'} element={<App/>}>
                        <Route index element={<Startpage/>}/>
                        {/*
                        <Route path={'register'} element={<Registrationpage/>}/>
                        <Route path={'login'} element={<Loginpage/>}/>
                        <Route path={'profile'} element={<Profilepage/>}>
                         <Route path={'userprofile'} element={<Userprofilepage/>}/>
                         <Route path={'adminprofile'} element={<Adminprofilepage/>}/>
                        </Route>
                        <Route path={'friends'} element={<Friendspage/>}/>

                           <Route path={'userrequest'} element={<Userrequestpage/>}/>
                           <Route path={'userconfirmation'} element={<UserConfirmationpage/>}/>
                         <Route path={'companyconfirmation'} element={<CompanyConfirmationpage/>}/>
                        </Route>*/}
                    </Route>
                )
            )
        }/>
    </React.StrictMode>,
)
