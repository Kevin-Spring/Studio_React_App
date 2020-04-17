import React from "react";
import "../style/_navbar.scss";

const Navbar = () => {

    return (
        <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
            <a href={".."} className={"navbar-brand"}>Spring Studio</a>
            <button className={"navbar-toggler"} type={"button"} data-toggle={"collapse"} data-target={"#navbarNav"} aria-controls={"navbarNav"} aria-expanded={"false"} aria-label={"Toggle navigation"}>
                <span className={"navbar-toggler-icon"}></span>
            </button>
            <div className={"collapse navbar-collapse"} id={"navbarNav"}>
                <ul className={"navbar-nav"}>
                    <li className={"nav-item active"}>
                        <a href={".."} className={"nav-link"}>Studios <span className={"sr-only"}>(current)</span></a>
                    </li>
                    <li className={"nav-item"}>
                        <a href={".."} className={"nav-link"}>Bookings</a>
                    </li>
                </ul>
                <ul className={"navbar-nav ml-auto"}>
                    <li className={"nav-item"}>
                        <a href={".."} className={"nav-link"}>Log in / Log out</a>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar;