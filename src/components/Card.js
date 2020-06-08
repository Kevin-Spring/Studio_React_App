import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "./FirebaseConfig";
import "../style/_card.scss";
import BookingFormModal from "./bookingFormModal";


class Card extends Component {

    state = {
        openModal: false,
        confirmation: undefined
    }

    openModalEvent(){
        this.setState({openModal: !this.state.openModal})
    }
    closeModalEvent(){
        this.setState({openModal: false})
    }

    renderLoginReq(){

        
        firebase.auth().onAuthStateChanged(function(user) {

            const bookBtn = document.querySelectorAll(".card__button");

            if (user) {
              // User is signed in.
            
            } else {
              // No user is signed in.
              for(let i = 0; i< bookBtn.length; i++){
                    bookBtn[i].style.display= "none";
                }
            }
          });
    }

    componentDidMount(){
        this.renderLoginReq();
    }

    onClickBookStudio() {

        const userId = firebase.auth().currentUser.uid;

        const db = firebase.firestore();

        if (firebase.auth().currentUser) {

            db.collection("bookingStudioData").doc(userId)
                .collection("personalData").add({
                    studioId: this.props.id.toString(),
                    title: this.props.title,
                    description: this.props.description,
                    price: this.props.price,
                    image: this.props.image
                });

        } else {
            alert("Please create an account before booking a studio")
        }

    }

    render() {
        return (
            <>
            <BookingFormModal openModal={this.state.openModal} closeModal={this.closeModalEvent.bind(this)} 
                callback={ (time)=> {
                this.setState({confirmation: time})
            }}/>

            
                <div className={"cards__wrapper"}>
                

                <div className={"card"}>
                    <img className={"card-img-top"} src={this.props.image} alt="studio 1" />
                    <div className={"card__body"}>
                        <h5 className={"card__title"}>{this.props.title}</h5>
                        <p className={"card__text"}>{this.props.description} <span className={"card__price"}>{this.props.price} kr</span></p>
                        <button className={"card__cancel"} onClick = {this.openModalEvent.bind(this)}>MODAL EVENT</button>
                        <Link to={"/handle-bookings"} className={"card__button"} onClick = {this.onClickBookStudio.bind(this)}>Book</Link>
                        {this.state.confirmation ?  <div> <br/> Your booked time: {this.state.confirmation} <br/> </div> : <span></span> } 
                    </div>
                </div>
            </div>
             
            </>
        )
    }

}

export default Card;