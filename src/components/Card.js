import React from "react";
import {Link} from "react-router-dom";
import "../style/_card.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import faker from "faker";



const Card = () => {
    return(
        <div>
            <Navbar />
            <div className={"card ml-5 mt-5"} style={{width: 300 + 'px'}}>
            <img src={faker.image.cats()} className={"card-img-top"} alt={"cat"}/>
                <div className={"card-body"}>
                    <h5 className={"card-title"}>Studio 1</h5>
                    <p className={"card-text"}>Some quick example text to build on the Studio 1 and make up the bulk of the card's content.</p>
                    <Link to={"/handle-bookings"} className={"btn btn-primary"}>Boka</Link>
                </div>
        </div>
        <div className={"card ml-5 mt-5"} style={{width: 300 + 'px'}}>
            <img src={faker.image.animals()} className={"card-img-top"} alt={"cat"}/>
                <div className={"card-body"}>
                    <h5 className={"card-title"}>Studio 2</h5>
                    <p className={"card-text"}>Some quick example text to build on the Studio 2 and make up the bulk of the card's content.</p>
                    <Link to={"/handle-bookings"} className={"btn btn-primary"}>Boka</Link>
                </div>
        </div>
        <div className={"card ml-5 mt-5"} style={{width: 300 + 'px'}}>
            <img src={faker.image.fashion()} className={"card-img-top"} alt={"cat"}/>
                <div className={"card-body"}>
                    <h5 className={"card-title"}>Studio 3</h5>
                    <p className={"card-text"}>Some quick example text to build on the Studio 3 and make up the bulk of the card's content.</p>
                    <Link to={"/handle-bookings"} className={"btn btn-primary"}>Boka</Link>
                </div>
        </div>
        <Footer />
    </div>
    )
}

export default Card;