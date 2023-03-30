import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={
            createBrowserRouter(createRoutesFromElements(
                    <Route path={'/'} element={<App/>}> {/*

Hej
                       <Route index element={<Homepage/>}/>
                        <Route path={'register'} element={<Registrationpage/>}/>
                        <Route path={'login'} element={<Loginpage/>}/>
                        <Route path={'profile'} element={<Profilepage/>}>
                         <Route path={'userprofile'} element={<Userprofilepage/>}/>
                         <Route path={'adminprofile'} element={<Adminprofilepage/>}/>
                        </Route>
                        <Route path={'friends'} element={<Friendspage/>}/>
                        <Route path={'friend'} element={<Friendpage/>}>
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