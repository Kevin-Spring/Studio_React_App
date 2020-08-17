import React, { Component } from 'react';
//import firebase from "./FirebaseConfig";
import Modal from "react-modal";
import "../style/_Form.scss";


const customStyles = {
    content : {
      top                   : '60%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      height: '100vh'
    }
  };

 

export default class BookingFormModal extends Component {

    state= {
        name: "Name",
        time: "Time"
    }


    handleConfirmation(e){
        e.preventDefault();
        this.props.callback(e.target.elements.time.value)
    }

    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value,
                        [e.target.time]: e.target.value });
      };

    //onSubmit={this.handleOnSubmit.bind(this)}
    //även tagit bort method="post" encType="text/plain" från form


   /*  handleOnSubmit(e) {
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
    
    } */


    render() {
        return (
            <>

            <Modal
                isOpen={this.props.openModal}
                onRequestClose={this.props.closeModal}
                style={customStyles}
                contentLabel="Booking Form"
            >

            <section className={"contact"}>
                       
                        <div className={"btn-animation"}>
                                <button onClick={this.props.closeModal} className={"form-btn"}>X</button>
                            </div>

                        <form onSubmit={this.handleConfirmation.bind(this)}>
                            <div className={"form__container"}>
                                <div className={"form__group field"}>
                                    <input type={"text"} className={"form__field"} name={"name"} id={'name'} value={this.state.name} onChange={this.handleOnChange.bind(this)} required />
                                    <label htmlFor={"name"} className={"form__label"}>Name</label>
                                </div>
                                <div className={"form__group field"}>
                                    <input type={"text"} className={"form__field"} name={"time"} id={"input__time"} placeholder={"Time"} value={this.state.time} onChange={this.handleOnChange.bind(this)} required />
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
                                    <button type={"submit"} className={"form-btn"}>Confirm!</button>
                                </div>
                            </div>
                        </form>
                    </section>

                </Modal>
                
            </>
        )
    }
}

