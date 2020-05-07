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
                        <p className={"card__text"}>{props.description} <span className={"card__price"}>{props.price} kr</span></p>
                        <Link to={"/handle-bookings"} className={"card__button"}>Book</Link>
                    </div>
            </div>
            </div>
        </div>
        )
    }

export default Card;