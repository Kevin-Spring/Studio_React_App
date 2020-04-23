import React from "react";
import {Link} from "react-router-dom";
import "../style/_card.scss";




const LandingPage = (props) => {
    return(
        <div>
            <h1><Link to={"/card"}>Book Studio!!</Link></h1>
    </div>
    )
}

export default LandingPage;