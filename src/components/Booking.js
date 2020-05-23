import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../style/_bookings.scss";
import firebase from "./FirebaseConfig";



class MyBookings extends Component {


    componentDidMount() {

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
                        console.log(doc.id, '=>', doc.data());
                    });
                })
                .catch(err => {
                    console.log('Error getting documents', err);
                });

        }
    }

        render(){


            return (
                <div>
                    <Navbar />


                    <section className={"bookings"}>

                    <h2 className={"bookings__header"}>Your bookings!</h2>
                
                <div className={"bookings__wrapper"}>
    
                <div className={"card"}>
                <div className={"card-img-top-1"} alt={"cat"}></div>
                    <div className={"card__body"}>
                        <h5 className={"card__title"}>Studio 1</h5>
                        <p className={"card__text"}>20/4, kl 9 - 17</p>
                        <div to={"/handle-bookings"} className={"card__button"}>Boka om</div>
                        <button className={"card__cancel"}>Avboka</button>
                    </div>
                </div>
                </div>



                    </section>


                    <Footer />
                </div>
            )
        }

    }

    export default MyBookings;