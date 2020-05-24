import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../style/_bookings.scss";
import firebase from "./FirebaseConfig";
import Card from "./Card";



class MyBookings extends Component {

    state = {
        bookings: []
    }


    componentDidMount() {

        firebase.auth().onAuthStateChanged(user => {
            if (user) {

                const userId = firebase.auth().currentUser.uid;

                const db = firebase.firestore();




                let bookingRef = db.collection('bookingStudioData').doc(userId).collection("personalData");
                let query = bookingRef.get()
                    .then(snapshot => {
                        if (snapshot.empty) {
                            console.log('No matching documents.');
                            return;
                        }

                        let studios = [];

                        snapshot.forEach(doc => {
                            //console.log(doc.id, '=>', doc.data());
                            studios.push(doc.data())

                        });

                        this.setState({ bookings: studios })

                        const cardBtn = document.querySelector(".card__button");
                        cardBtn.style.display = "none";


                    })
                    .catch(err => {
                        console.log('Error getting documents', err);
                    });



            }


        })



    }


    render() {

        console.log(this.state.bookings);


        return (
            <div>
                <Navbar />


                <section className={"bookings"}>

                    <h2 className={"bookings__header"}>Your bookings!</h2>

                    <div className="grid__wrapper-cards">

                    {this.state.bookings.map((studio) => (

                        <Card
                            title={studio.title}
                            price={studio.price}
                            description={studio.description}
                            image={studio.image}
                        />

                    )

                    )}

                    </div>


                </section>


                <Footer />
            </div>
        )
    }

}

export default MyBookings;