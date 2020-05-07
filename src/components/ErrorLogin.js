import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const ErrorLogin = () => {

    return (
        <div>
            <Navbar />
            <section className={"contact"}>

                <h2 className={"contact__header"}>Please Login first!</h2>
                <br />
                <Link to={"/adminPage"} className={"form-btn form__btn-underline"}>Log in</Link>
                <br />
                <Footer />
            </section>
        </div>
    )
}
export default ErrorLogin;