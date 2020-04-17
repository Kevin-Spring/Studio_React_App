import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";
import faker from "faker";

const App = ()=>{
    return (
        <div>
        <Navbar/>
        <Card img={faker.image.cats()}/>
        <Card img={faker.image.animals()}/>
        <Card img={faker.image.fashion()}/>
        <Footer year={Date()}/>
        </div>
    )
}

export default App;