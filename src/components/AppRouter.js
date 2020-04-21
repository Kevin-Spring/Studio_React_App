import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import App from "./App";
import Navbar from "./Navbar";
import Card from "./Card";
import HandleBooking from "./HandleBookings";
import Booking from "./Booking";
import Footer from "./Footer";



const AppRouter = () => {

    return(
        <div>
        <BrowserRouter>
            <Route path="/" component={Navbar}></Route>
            <Route path="/" component={App} exact></Route>
            <Route path="/" component={Footer}></Route>
            <Route path="/card" component={Card} exact></Route>
            <Route path="/handle-bookings" component={HandleBooking} exact></Route>
            <Route path="/bookings" component={Booking} exact></Route>

        
        </BrowserRouter>
            
        </div>
    )
}

export default AppRouter;