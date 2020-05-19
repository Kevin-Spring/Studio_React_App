import React, { Component } from "react";
import firebase from "./FirebaseConfig";
import {Link} from "react-router-dom";
import "../style/_Form.scss";

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            condition: false,
        }

    }

    handleOnSubmit(e) {
        e.preventDefault();
        
        const userId = firebase.auth().currentUser.uid;
        
        const db = firebase.firestore();

        if (firebase.auth().currentUser) {

                db.collection("bookingFormData").doc(userId)
                .collection("personalData").add({
                    name: e.target.elements.name.value,
                    telephone: e.target.elements.telephone.value,
                    time: e.target.elements.time.value,
                    message: e.target.elements.textarea.value
                });

        } else {
            alert("Please create an account before booking a studio")
        }

        this.setState({ condition: true })

    }

     /* IF CONDITION ANVÄNDARE MÅSTE VARA INLOGGAD */

    renderLoginReq(){

        const userBookStudio = document.querySelector(".user-book-studio");
        const userNeedLogin = document.querySelector(".user-need-login");
        
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
                userBookStudio.style.display = " ";
                userNeedLogin.style.display = "none";
            
            } else {
              // No user is signed in.
              userBookStudio.style.display = "none";
                userNeedLogin.style.display = " ";
            }
          });
    }

    componentDidMount(){
        this.renderLoginReq();

        console.log(firebase.auth().currentUser.uid);
    }


    render() {
        return (
            

            <div>

        

                {this.state.condition === false &&

                    <div className={"user-book-studio"}>

                    <section className={"contact"}>
                        <h2 className={"contact__header"}>get in touch!</h2>

                        <form onSubmit={this.handleOnSubmit.bind(this)} method="post" encType="text/plain">
                            <div className={"form__container"}>
                                <div className={"form__group field"}>
                                    <input type={"text"} className={"form__field"} placeholder={"Name"} name={"name"} id={'name'} required />
                                    <label htmlFor={"name"} className={"form__label"}>Name</label>
                                </div>
                                <div className={"form__group field"}>
                                    <input type={"text"} className={"form__field"} name={"time"} id={"input__time"} placeholder={"Time"}
                                        required />
                                    <label htmlFor={"input__time"} className={"form__label"}>What Time?</label>
                                </div>
                                <div className={"form__group field"}>
                                    <input type="number" className={"form__field"} name={"telephone"} id={"input__telephone"} placeholder={"Telephone"}
                                         required />
                                    <label htmlFor={"input__telephone"} className={"form__label"}>Telephone</label>
                                </div>
                                <div className={"form__group field"}>
                                    <textarea name={"textarea"} className={"form__field"} id={"textarea"} cols={"30"} rows={"10"}
                                        placeholder={"Other thoughts?"}></textarea>
                                    <label htmlFor={"textarea"} className={"form__label"}>Anything else?</label>
                                </div>
                                <div className={"btn-animation"}>
                                    <button type={"submit"} className={"form-btn"}>SEND!</button>
                                </div>
                            </div>
                        </form>
                    </section>
                    </div>


                }

                {this.state.condition === true &&
                    <div>
                        <section className={"contact"}>
                            <h2 className={"contact__header"}>Booking Confirmed!</h2>
                        </section>

                    </div>
                }

                {
                    <div className={"user-need-login"}>
                    <section className={"contact"}>
                    <h2 className={"contact__header"}>Please log in first!</h2>
                    <Link to={"/userpage"} className={"form-btn"}>Log in!</Link>
                    </section>
                    </div>
                }


            </div>


        )
    }

}

export default Form;
