import React, {Component} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AdminCard from "./AdminCard";
import axios from "axios";
import "../style/_studios.scss";



class AdminStudios extends Component{

    state={
        products: []
    }
    

    async componentDidMount(){
        await axios
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
                <h2 className={"studios__header"}>Welcome {this.props.name}</h2>

                <div className="grid__wrapper-cards">

                
                
                {this.state.products.map( (product) => (
                    
                    <AdminCard key={product.id}
                          id = {product.id}
                          title = {product.title}
                          price= {product.price}
                          description = {product.description}
                          image = {"http://localhost:1337" + product.image.formats.small.url}
                        />

                    )

                )}


                </div>
                
                </section>
                <Footer year={Date()}/>
            </div>
        )
    }
    
}

export default AdminStudios;