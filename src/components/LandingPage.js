import React from "react";
import {Link} from "react-router-dom";
import "../style/_card.scss";
import "../style/_landingPage.scss";




const LandingPage = () => {
    return(
        <div>
    <header className={"header"}>
        <div className={"header__wrapper"}>
            <div className={"header__wrapper__hero"}>
                <div className={"header__wrapper__hero-text hero__grid-item fadeIn"}>Photo,  Film,  Music</div>
                <h1 className={"header__wrapper__hero-header hero__grid-item fadeIn"}>Spring Studio</h1>
                <div className={"hero__grid-item"}><Link to={"/card"} className={"header__wrapper__hero-link underline fadeIn"} href={"#ourwork"}>Take a look!</Link></div>
            </div>
        </div>
    </header>

   
    <section id={"species"}>
        <div className={"species__grid-wrapper fadeIn"}>
            <div className={"species__grid-item"}>
                <div className="">
                    <h2 className={"species__grid-item-header"}>Studio 1</h2>
                    <div className={"hr"}></div>
                    <h4 className={"species__grid-item-intro"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Commodi natus nostrum labore minus nesciunt omnis, iste harum sint soluta laborum!</h4>

                    <div className={"species__grid-item-text"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                        eum
                        repellat expedita saepe voluptatem est alias magni ducimus ut eaque architecto quia, at id
                        repudiandae praesentium ab dolores aliquid optio distinctio.</div>
                </div>

                <Link to={"/card"} className={"landingPage__bookStudio-link"}><h2 className={"landingPage__bookStudio underline"}>I want it!</h2></Link>
            </div>
            <div className={"species__grid-item species__grid-img"}></div>
        </div>
    </section>
    
    </div>
    )
}

export default LandingPage;