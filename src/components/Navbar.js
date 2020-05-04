import React from "react";
import {Link} from "react-router-dom";
import "../style/_navbar.scss";

const Navbar = () => {

    return (
        <nav className={"navbar sticky"}>

            <div className={"navbar__items-wrapper"}>
                <ul className={"navbar__items-left-wrapper"}>
                <li className={"nav-item"}>
                        <Link to={"/"} className={"nav-link"}><div className={"spring-logo"}></div></Link>
                    </li>
                    <li className={"nav-item"}>
                        <Link to={"/studios"} className={"nav-link underline"}>Studios</Link>
                    </li>
                </ul>

                <ul className={"navbar__items-right-wrapper"}>
                    <li className={"nav-item"}>
                        <Link to={"/bookings"} className={"nav-link underline"}>Bookings</Link>
                    </li>
                    <li className={"nav-item"}>
                        {/* <Link to={"/login"} className={"nav-link underline"}>Log in / Log out</Link> */}
                        <Link to={"/adminLogin"} className={"nav-link underline"}>Admin</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )

}

export default Navbar;