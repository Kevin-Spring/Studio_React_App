import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import faker from "faker";

const App = ()=>{
    return (
        <div>
        <Navbar/>
        <Card img={faker.image.cats()}/>
        <Card img={faker.image.animals()}/>
        <Card img={faker.image.fashion()}/>
        </div>
    )
}

export default App;