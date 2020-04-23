import React from "react";
import {Link} from "react-router-dom";
import faker from "faker";
import "../style/_card.scss";
import "../style/_landingPage.scss";




const LandingPage = (props) => {
    return(
        <div>
            <div className={"landingPage-background"}><img src={faker.image.cats()} style={{width: 100 + 'vw'}}></img></div>
            <h1 className={"landingPage-header"}><Link to={"/card"}>Book Studio!!</Link></h1>
    </div>
    )
}

export default LandingPage;