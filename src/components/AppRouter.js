import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import App from "./App";
import Studios from "./Studios";
import HandleBooking from "./HandleBookings";
import Booking from "./Booking";
import AdminForm from "./AdminForm";
import NotFoundPage from "./NotFoundPage";
import AdminPage from "./AdminPage";
import EditCard from "./EditCard";



const AppRouter = () => {

    return(
        <div>
        <BrowserRouter>

            <Switch>
            <Route path="/" component={App} exact />
            <Route path="/studios" component={Studios} exact />
            <Route path="/handle-bookings" component={HandleBooking} exact />
            <Route path="/bookings" component={Booking} exact />
            <Route path="/upload" exact component={AdminForm} />
            <Route path="/adminPage" exact component={AdminPage} />
            <Route path="/edit" exact component={EditCard} />
            <Route component={NotFoundPage} />
            </Switch>

        
        </BrowserRouter>
            
        </div>
    )
}

export default AppRouter;