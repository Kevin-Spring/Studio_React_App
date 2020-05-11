import React, { Component } from "react";
import firebase from "./FirebaseConfig";

class FirebaseTest extends Component {

    onClickFirebase() {
        const docRef = firebase.firestore().collection("Bookings").doc("Bookings-info");
        const docRef2 = firebase.firestore().collection("Bookings").doc("Bookings-info-2");

        /* Hämta data från firebase */
        docRef.get().then( booking => {
            if (booking.exists) {

                console.log("document data :", booking.data());

            } else {
                console.log("error");
            }
        })

        /* Skriva data i firebase */
        docRef.set({
            item:"janneball",
            price: 200
        })
        docRef2.set({
            item:"janneball",
            price: 200
        })
    }

    render() {
        return (
            <div>

                <button onClick={this.onClickFirebase.bind(this)}>Hämte firestore info</button>


            </div>
        )
    }
}

export default FirebaseTest;