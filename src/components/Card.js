import React from "react";
import {Link} from "react-router-dom";
import "../style/_card.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";



const Card = () => {
    return(
        <div>
            <Navbar />
            <h2 className={"studios__header"}>Studios</h2>
            <section className={"card-page"}>

            <div className={"cards__wrapper"}>

            <div className={"card"}>
            <div className={"card-img-top-1"} alt={"cat"}></div>
                <div className={"card__body"}>
                    <h5 className={"card__title"}>Studio 1</h5>
                    <p className={"card__text"}>Some quick example text to build on the Studio 1 and make up the bulk of the card's content.</p>
                    <Link to={"/handle-bookings"} className={"card__button"}>Boka</Link>
                    <span className={"card__price"}>10.000kr</span>
                </div>
        </div>
        <div className={"card"}>
            <div className={"card-img-top-2"} alt={"cat"}></div>
                <div className={"card__body"}>
                    <h5 className={"card__title"}>Studio 2</h5>
                    <p className={"card__text"}>Some quick example text to build on the Studio 2 and make up the bulk of the card's content.</p>
                    <Link to={"/handle-bookings"} className={"card__button"}>Boka</Link>
                    <span className={"card__price"}>10.000kr</span>
                </div>
        </div>
        <div className={"card"}>
            <div className={"card-img-top-3"} alt={"cat"}></div>
                <div className={"card__body"}>
                    <h5 className={"card__title"}>Studio 3</h5>
                    <p className={"card__text"}>Some quick example text to build on the Studio 3 and make up the bulk of the card's content.</p>
                    <Link to={"/handle-bookings"} className={"card__button"}>Boka</Link>
                    <span className={"card__price"}>10.000kr</span>
                </div>
        </div>
        </div>
        </section>
        <Footer />
    </div>
    )
}

export default Card;