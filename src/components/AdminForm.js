import React, { Component } from "react";
import axios from "axios";


class AdminForm extends Component{

    state= {

        title: " "
    }


    async onSubmitToApi(e){
        e.preventDefault();

        
        this.setState({title: e.target.elements.title.value});

        const res = await axios.post("http://localhost:1337/products", {
            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
            pris: e.target.elements.price.value,
        })
       

        console.log(res);
        

    }

    render(){

        return(

            <div>

                <form onSubmit={this.onSubmitToApi.bind(this)}>
                
                    <input type={"text"} name={"title"}/> <br />
                    <input type={"description"} name={"description"} /> <br />
                    <input type={"number"} name={"price"} /> <br />
                   
                    
                    <button>Spara</button>

                </form>
            
            </div>

        )
    }
}

export default AdminForm;