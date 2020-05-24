import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../style/_bookings.scss";
import firebase from "./FirebaseConfig";
import Card from "./Card";



class MyBookings extends Component {

    state={
        bookings: []
    }


    componentDidMount() {

        const cardBtn = document.querySelector(".card__button");
        cardBtn.style.display = "none";


        const userId = firebase.auth().currentUser.uid;

        const db = firebase.firestore();

        if (firebase.auth().currentUser) {

            let bookingRef = db.collection('bookingStudioData').doc(userId).collection("personalData");
            let query = bookingRef.get()
                .then(snapshot => {
                    if (snapshot.empty) {
                        console.log('No matching documents.');
                        return;
                    }

                    snapshot.forEach(doc => {
                        //console.log(doc.id, '=>', doc.data());
                        this.setState({bookings: doc.data()})
                    });

                    
                })
                .catch(err => {
                    console.log('Error getting documents', err);
                });

        }
    }


        render(){

            console.log(this.state.bookings);

        
            return (
                <div>
                    <Navbar />


                    <section className={"bookings"}>

                    <h2 className={"bookings__header"}>Your bookings!</h2>

                    <Card image = {this.state.bookings.image}
                          title = {this.state.bookings.title}
                          price= {this.state.bookings.price}
                          description = {this.state.bookings.description}
                          
                        />


                    </section>


                    <Footer />
                </div>
            )
        }

    }

    export default MyBookings;