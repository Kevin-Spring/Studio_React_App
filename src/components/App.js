import React from "react";
import Navbar from "./Navbar";
//import Form from "./Form";
import Footer from "./Footer";
import faker from "faker";
import LandingPage from "./LandingPage";

const App = ()=>{
    return (
        <div>
            <Navbar />
            <LandingPage img={faker.image.cats()}/>
            <LandingPage img={faker.image.animals()}/>
            <LandingPage img={faker.image.fashion()}/>
            <Footer year={Date()}/>
        </div>
    )
}

export default App;