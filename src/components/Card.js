import React from "react";
import {Link} from "react-router-dom";
import "../style/_card.scss";



const Card = (props) => {
    return(
        <div className={"card ml-5 mt-5"} style={{width: 300 + 'px'}}>
        <img src={props.img} className={"card-img-top"} alt={"cat"}/>
            <div className={"card-body"}>
                <h5 className={"card-title"}>Card title</h5>
                <p className={"card-text"}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={"/handle-bookings"} className={"btn btn-primary"}>Boka</Link>
            </div>
    </div>
    )
}

export default Card;