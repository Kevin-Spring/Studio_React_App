import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import App from "./App";
//import Navbar from "./Navbar";
import Card from "./Card";
import HandleBooking from "./HandleBookings";
import Booking from "./Booking";
//import Footer from "./Footer";
import Login from "./Login";
import NotFoundPage from "./NotFoundPage";



const AppRouter = () => {

    return(
        <div>
        <BrowserRouter>

            <Switch>
            <Route path="/" component={App} exact></Route>
            <Route path="/card" component={Card} exact></Route>
            <Route path="/handle-bookings" component={HandleBooking} exact></Route>
            <Route path="/bookings" component={Booking} exact></Route>
            <Route path="/login" component={Login} exact></Route>
            <Route component={NotFoundPage}></Route>
            </Switch>

        
        </BrowserRouter>
            
        </div>
    )
}

export default AppRouter;