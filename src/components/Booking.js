import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import "../style/_bookings.scss";



const Booking = () => {

    return(
        <div>
        <Navbar />


            <section className={"bookings"}>
            
            <div className={"card"}>
            <div className={"card-img-top-1"} alt={"cat"}></div>
                <div className={"card__body"}>
                    <h5 className={"card__title"}>Studio 1</h5>
                    <p className={"card__text"}>20/4, kl 9 - 17</p>
                    <Link to={"/handle-bookings"} className={"card__button"}>Boka om</Link>
                    <button className={"card__cancel"}>Avboka</button>
                </div>
            </div>
            
            </section>


           <Footer />
        </div>
    )
}

export default Booking;