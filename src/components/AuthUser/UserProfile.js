//Admin profile
//Dashboard i framtiden

import React, { Component } from "react";
import firebase from "../FirebaseConfig";
import Navbar from "../Navbar";
import "../../style/_Form.scss";


class UserProfile extends Component {

    state = {

        image: " ",
        user: null

    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ user: this.props.userData });
            console.log(user);
        })
    }



    logOut() {
        localStorage.clear();
        window.location.reload(false);
        firebase.auth().signOut();
    }
    deleteAcc() {
        var user = firebase.auth().currentUser;

        user.delete().then(function () {
            localStorage.clear();
            window.location.reload(false);
            alert("Your account was successfully deleted!")
        }).catch(function (error) {
            alert(error)
        });


    }




    render() {

        const loggedIn = this.state.user;


        return (
            <div>
                <Navbar />

                {loggedIn ?

                    (
                        <div>

                            <section className={"contact"}>
                                <h2 className={"contact__header"}>Welcome {this.props.userData} </h2>

                               



                                <button onClick={this.logOut.bind(this)} className={"form-btn"}>Logout</button>
                                <button onClick={this.deleteAcc.bind(this)} className={"form-btn"}>DELTE ACC</button>
                            </section>
                        </div>

                    )

                    :


                    (
                        <div></div>
                    )

                }

            </div>
        )

    }
}

export default UserProfile;