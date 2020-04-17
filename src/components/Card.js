import React from "react";



const Card = (props) => {
    return(
        <div className={"card"} style={{width: 300 + 'px'}}>
        <img src={props.img} className={"card-img-top"} alt={"cat"}/>
            <div className={"card-body"}>
                <h5 className={"card-title"}>Card title</h5>
                <p className={"card-text"}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href={".."} className={"btn btn-primary"}>Boka</a>
            </div>
    </div>
    )
}

export default Card;