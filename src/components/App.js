import React from "react";
//import nav comp
import Card from "./Card";
import faker from "faker";

const App = ()=>{
    return (
        <div>
        <nav>Navbar hamnar här</nav>
        <Card img={faker.image.cats()}/>
        <Card img={faker.image.animals()}/>
        </div>
    )
}

export default App;