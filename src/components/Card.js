import React from "react";
import {Link} from "react-router-dom";
import "../style/_card.scss";



const Card = (props) => {
    return(
        <div>
            

            <div className={"cards__wrapper"}>

            <div className={"card"}>
            <img className={"card-img-top"} src={props.image} alt="studio 1"/>
                <div className={"card__body"}>
                    <h5 className={"card__title"}>{props.title}</h5>
                    <p className={"card__text"}>{props.description}</p>
                    <Link to={"/handle-bookings"} className={"card__button"}>Boka</Link>
                    <span className={"card__price"}>{props.price}</span>
                </div>
        </div>
        </div>
    </div>
    )
}

export default Card;