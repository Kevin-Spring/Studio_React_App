import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LandingPage from "./LandingPage";

const App = ()=>{
    return (
        <div>
            <Navbar/>
            <LandingPage />
            <Footer year={Date()}/>
        </div>
    )
}

export default App;