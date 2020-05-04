import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import App from "./App";
import Studios from "./Studios";
import HandleBooking from "./HandleBookings";
import Booking from "./Booking";
//import Login from "./Login";
import AdminForm from "./AdminForm";
import NotFoundPage from "./NotFoundPage";
import AdminPage from "./AdminPage";



const AppRouter = () => {

    return(
        <div>
        <BrowserRouter>

            <Switch>
            <Route path="/" component={App} exact />
            <Route path="/studios" component={Studios} exact />
            <Route path="/handle-bookings" component={HandleBooking} exact />
            <Route path="/bookings" component={Booking} exact />
            {/* <Route path="/login" component={Login} exact /> */}
            <Route path="/admin" exact component={AdminForm} />
            <Route path="/adminPage" exact component={AdminPage} />
            <Route component={NotFoundPage} />
            </Switch>

        
        </BrowserRouter>
            
        </div>
    )
}

export default AppRouter;