import React, { Component } from "react";
import axios from "axios";


class AdminForm extends Component{

    state= {

        //title: " ",
        image: " "
        
    }

    eventChange(e){
        console.log(e.target.files[0]);
        this.setState({image: e.target.files[0]})
    }

    async onSubmitToApi(e){
        e.preventDefault();

        
        //this.setState({title: e.target.elements.title.value});

        const res = await axios.post("http://localhost:1337/products", {
            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
            price: e.target.elements.price.value,
            
        })
        console.log(res);
        
        /* För att lägga till bild i strapi */
        const data = new FormData();
        data.append("files", this.state.image);
        data.append("ref", "products");
        data.append("refId", res.data.id);
        data.append("field", "image");

        const img = await axios.post("http://localhost:1337/upload", data)  
       
        console.log(img);
       
        

    }

    render(){

        return(

            <div>

                <form onSubmit={this.onSubmitToApi.bind(this)}>
                
                    <input type={"text"} name={"title"}/> <br />
                    <input type={"description"} name={"description"} /> <br />
                    <input type={"number"} name={"price"} /> <br />

                    <input type={"file"} onChange={this.eventChange.bind(this)} name={"file"} /> 
                   
                    
                    <button>Spara</button>

                </form>
            
            </div>

        )
    }
}

export default AdminForm;