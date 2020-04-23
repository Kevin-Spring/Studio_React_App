import React from "react";
import Form from "./Form";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../style/_handleBookings.scss";


const HandleBooking = () => {

    return(
        <div>
        <Navbar />
        <section className={"handle__form"}>
            <Form />
            </section>
            <Footer />
        </div>
    )
}

export default HandleBooking;