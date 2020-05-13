import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "./FirebaseConfig";
import "../style/_card.scss";


class Card extends Component {

    onClickBookStudio(){

        const docRef = firebase.firestore().collection("Bookings").doc(this.props.id.toString());

        docRef.set({
            title: this.props.title,
            description: this.props.description,
            price: this.props.price
        })

    }

    render() {
        return (
            <div>

                <div className={"cards__wrapper"}>

                    <div className={"card"}>
                        <img className={"card-img-top"} src={this.props.image} alt="studio 1" />
                        <div className={"card__body"}>
                            <h5 className={"card__title"}>{this.props.title}</h5>
                            <p className={"card__text"}>{this.props.description} <span className={"card__price"}>{this.props.price} kr</span></p>
                            <Link to={"/handle-bookings"} className={"card__button"} onClick = {this.onClickBookStudio.bind(this)}>Book</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Card;