import React from "react";
import "../style/_footer.scss";

const Footer = (props) => {

    return(
        <footer className={"footer"}>
            <div>Copyright @{props.year}</div>
            <div>Find us!</div>
            <div>About us!</div>
            <div>Contact us!</div>
        </footer>
    )
}

export default Footer;