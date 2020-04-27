import React, {Component} from "react";
import Navbar from "./Navbar";
//import Form from "./Form";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Card from "./Card";
import axios from "axios";

class App extends Component{

    state={
        products: []
    }

    onClickApi(){
        axios
        .get("http://localhost:1337/products")
        .then((res)=>{
            console.log(res)
            this.setState({products:res.data})

        })
    }



    render(){
        return (
            <div>
                <Navbar />
                <LandingPage />
                {this.state.products.map( (product) => (
                    
                    <Card title = {product.title}
                          price= {product.price}
                          description = {product.description}
                          image = {"http://localhost:1337" + product.image.formats.small.url} 
                        />

                    )

                )}
                
                <button onClick={this.onClickApi.bind(this)}>Get Studios!</button>
                <Footer year={Date()}/>
            </div>
        )
    }
    
}

export default App;