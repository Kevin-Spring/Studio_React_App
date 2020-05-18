import React, { Component } from "react";
import firebase from "./FirebaseConfig";
//import {Link} from "react-router-dom";
import "../style/_Form.scss";

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {

            condition: false,
            name: undefined,
            bookedTime: undefined,
            phoneNr: undefined
        }
    }

    handleOnChangeName = (e) => {

        this.setState({ name: e.target.value })
        localStorage.setItem("Name", e.target.value);

    }
    handleOnChangeTime = (e) => {

        this.setState({ bookedTime: e.target.value })
        localStorage.setItem("BookedTime", e.target.value);

    }
    handleOnChangeMobile = (e) => {

        this.setState({ phoneNr: e.target.value })
        localStorage.setItem("PhoneNr", e.target.value);
    }


    handleOnSubmit(e) {
        e.preventDefault();
    
        const userId = firebase.auth().currentUser.uid;

        const db = firebase.firestore();
        
        if(firebase.auth().currentUser){
            const docRef = db.collection("bookingFormData").doc(userId);

        console.log(userId);

        docRef.set({
            name : e.target.elements.name.value,
            telephone: e.target.elements.telephone.value,
            time: e.target.elements.time.value,
            message: e.target.elements.textarea.value
        })
        }

        else{ 
            alert("Please create an account before booking a studio")
        }

        /* IF CONDITION IS TRUE MEDDELANDET HAR SKICKATS GRATTIS RENDERA HTML */

    }

    render() {
        return (
            <div>

                <section className={"contact"}>
                <h2 className={"contact__header"}>get in touch!</h2>
       
                <form onSubmit={this.handleOnSubmit} method="post" encType="text/plain">
                    <div className={"form__container"}>
                        <div className={"form__group field"}>
                            <input type={"text"} className={"form__field"} placeholder={"Name"} name={"name"} id={'name'} onChange={this.handleOnChangeName} required />
                            <label htmlFor={"name"} className={"form__label"}>Name</label>
                        </div>
                        <div className={"form__group field"}>
                            <input type={"text"} className={"form__field"} name={"time"} id={"input__time"} placeholder={"Time"}
                            onChange={this.handleOnChangeTime} required />
                            <label htmlFor={"input__time"} className={"form__label"}>What Time?</label>
                        </div>
                        <div className={"form__group field"}>
                            <input type="number" className={"form__field"} name={"telephone"} id={"input__telephone"} placeholder={"Telephone"}
                            onChange={this.handleOnChangeMobile} required />
                            <label htmlFor={"input__telephone"} className={"form__label"}>Telephone</label>
                        </div>
                        <div className={"form__group field"}>
                            <textarea name={"textarea"} className={"form__field"} id={"textarea"} cols={"30"} rows={"10"}
                                placeholder={"Other thoughts?"}></textarea>
                            <label htmlFor={"textarea"} className={"form__label"}>Anything else?</label>
                        </div>
                        <div className={"btn-animation"}>
                            <button type={"submit"} className={"form-btn"}>{/* <Link to={"/bookings"} className={"form__btn-underline"}> </Link> */}SEND!</button>
                        </div>
                    </div>
                </form>

                <div>{this.state.name}</div>
                <div>{this.state.bookedTime}</div>
                <div>{this.state.phoneNr}</div>
                </section>
            </div>
            
        )
    }

}

export default Form;
