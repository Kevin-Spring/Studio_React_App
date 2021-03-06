import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import App from "./App";
import Studios from "./Studios";
import HandleBooking from "./HandleBookings";
import AdminForm from "./AdminForm";
import NotFoundPage from "./NotFoundPage";
import AdminPage from "./AdminPage";
import EditCard from "./EditCard";
import FirebaseTest from "./FirebaseTest";
import UserPage from "./AuthUser/UserPage";
import UserProfile from "./AuthUser/UserProfile";
import MyBookings from "./Booking";



const AppRouter = () => {

    return(
        <div>
        <BrowserRouter>

            <Switch>
            <Route path="/" component={App} exact />
            <Route path="/studios" component={Studios} exact />
            <Route path="/handle-bookings" component={HandleBooking} exact />
            <Route path="/bookings" component={MyBookings} exact />
            <Route path="/upload" exact component={AdminForm} />
            <Route path="/adminPage" exact component={AdminPage} />
            <Route path="/edit" exact component={EditCard} />
            <Route path="/firebasetest" exact component={FirebaseTest} />
            <Route path="/userpage" exact component={UserPage} />
            <Route path="/userprofile" exact component={UserProfile} /> 
            <Route component={NotFoundPage} />
            </Switch>

        
        </BrowserRouter>
            
        </div>
    )
}

export default AppRouter;