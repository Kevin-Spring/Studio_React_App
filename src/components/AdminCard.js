import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "../style/_card.scss";


class AdminCard extends Component{

    async onClickDelete(){
        
        await axios
            .delete("http://localhost:1337/products/" + this.props.id)
            .then((res)=>{
                console.log(res)
            }) 
       
    }

    onClickEdit(){
        localStorage.setItem("id", this.props.id)
        localStorage.setItem("title", this.props.title)
        localStorage.setItem("description", this.props.description)
        localStorage.setItem("price", this.props.price)
    }

    


    render(){
        return(
            <div>
                
                <div className={"cards__wrapper"}>
    
                <div className={"card"}>
                <img className={"card-img-top"} src={this.props.image} alt="studio 1"/>
                    <div className={"card__body"}>
                        <h5 className={"card__title"}>{this.props.title}</h5>
                        <p className={"card__text"}>{this.props.description} <span className={"card__price"}>{this.props.price} kr</span></p>
                        <Link to={"/handle-bookings"} className={"card__button"}>Book</Link>
                        <button onClick={this.onClickDelete.bind(this)} className={"card__cancel"}> Remove</button>
                        <button className={"card__edit"}> <Link to={"/edit"} className={"card__edit-link"} onClick={this.onClickEdit.bind(this)}>Edit</Link></button>
                        
                    </div>
            </div>
            </div>
        </div>
        )
    }
    
}

export default AdminCard;