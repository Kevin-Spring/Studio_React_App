import React, {Component} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import axios from "axios";
import "../style/_studios.scss";



class Studios extends Component{

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
                
                <section className={"card-page"}>
                <h2 className={"studios__header"}>Studios</h2>

                <div className="grid__wrapper-cards">

                
                
                {this.state.products.map( (product) => (
                    
                    <Card key={product.id}
                          title = {product.title}
                          price= {product.price}
                          description = {product.description}
                          image = {"http://localhost:1337" + product.image.formats.small.url} 
                        />

                    )

                )}


                </div>
                
               
                
                <button onClick={this.onClickApi.bind(this)} className={"get__studios"}>Get Studios!</button>
                </section>
                <Footer year={Date()}/>
            </div>
        )
    }
    
}

export default Studios;