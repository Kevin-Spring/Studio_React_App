import React from "react";
import {Link} from "react-router-dom";
import "../style/_card.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";



const Card = (props) => {
    return(
        <div>
            <Navbar />
            <h2 className={"studios__header"}>Studios</h2>
            <section className={"card-page"}>

            <div className={"cards__wrapper"}>

            <div className={"card"}>
            <img src={props.image} alt="studio 1"/>
            <div className={"card-img-top-1"} alt={"cat"}></div>
                <div className={"card__body"}>
                    <h5 className={"card__title"}>{props.title}</h5>
                    <p className={"card__text"}>{props.description}</p>
                    <Link to={"/handle-bookings"} className={"card__button"}>Boka</Link>
                    <span className={"card__price"}>{props.price}</span>
                </div>
        </div>
        </div>
        </section>
        <Footer />
    </div>
    )
}

export default Card;