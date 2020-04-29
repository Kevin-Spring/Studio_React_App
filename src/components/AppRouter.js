import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import App from "./App";
import Studios from "./Studios";
import HandleBooking from "./HandleBookings";
import Booking from "./Booking";
import Login from "./Login";
import AdminForm from "./AdminForm";
import NotFoundPage from "./NotFoundPage";



const AppRouter = () => {

    return(
        <div>
        <BrowserRouter>

            <Switch>
            <Route path="/" component={App} exact></Route>
            <Route path="/studios" component={Studios} exact></Route>
            <Route path="/handle-bookings" component={HandleBooking} exact></Route>
            <Route path="/bookings" component={Booking} exact></Route>
            <Route path="/login" component={Login} exact></Route>
            <Route path="/admin" exact component={AdminForm} />
            <Route component={NotFoundPage}></Route>
            </Switch>

        
        </BrowserRouter>
            
        </div>
    )
}

export default AppRouter;