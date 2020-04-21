import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
            <Link to={"/"} className={"navbar-brand"}>Spring Studio</Link>
            <button className={"navbar-toggler"} type={"button"} data-toggle={"collapse"} data-target={"#navbarNav"} aria-controls={"navbarNav"} aria-expanded={"false"} aria-label={"Toggle navigation"}>
                <span className={"navbar-toggler-icon"}></span>
            </button>
            <div className={"collapse navbar-collapse"} id={"navbarNav"}>
                <ul className={"navbar-nav"}>
                    <li className={"nav-item active"}>
                        <Link to={"/card"} className={"nav-link"}>Studios <span className={"sr-only"}>(current)</span></Link>
                    </li>
                </ul>
                <ul className={"navbar-nav ml-auto"}>
                <li className={"nav-item"}>
                        <Link to={"/bookings"} className={"nav-link"}>Bookings</Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to={"/login"} className={"nav-link"}>Log in / Log out</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar;