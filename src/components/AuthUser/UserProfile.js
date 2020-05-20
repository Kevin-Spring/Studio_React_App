//Admin profile
//Dashboard i framtiden

import React, { Component } from "react";
import firebase from "../FirebaseConfig";
import Navbar from "../Navbar";
import "../../style/_Form.scss";


class UserProfile extends Component {

    state = {

        image: undefined,
        user: null

    }

    //To show uploaded file
    componentDidMount(e) {
            this.setState({ user: this.props.userData });
           
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


    //To upload file
    async profilePic(e) {

         //Get elements
         let uploader = document.getElementById("uploader");
         let user = firebase.auth().currentUser.uid;
        
             // get File
             let file = e.target.files[0];
             console.log(file)
       
             // create storge ref
             let storageRef = firebase.storage().ref("profilepictures/" + "users/" + user + "/" + file.name);
               //uplad file
               let task = storageRef.put(file);
               //progress bar
               task.on('state_changed',
               
                 function progress(snapshot){
                     let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                     uploader.value = percentage;
                 },
         
                 function error(err){
                    console.log(err);
                 },
         
                 function complete(){
                    console.log("successfully uploaded");
                 }
         
               )

               const img = document.querySelector("#img");

          firebase.auth().onAuthStateChanged(user =>{
             if(user){
                 firebase.storage().ref("profilepictures/" + "users/" + user.uid + "/" + file.name).getDownloadURL().then(imgUrl => {
                     img.src = imgUrl;
                 })
             }
         })
    }


    //To upload file
    onSubmitToFirebase(e) {
         e.preventDefault();

         //let file = e.target.files[0];
         
        
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

                                <form onSubmit={this.onSubmitToFirebase.bind(this)}>
                                    <div className={"form__container"}>
                                        <div className={"form__group field"}>
                                            <input type={"file"} className={"form__field img"} onChange={this.profilePic.bind(this)} name={"file"} id={"fileButton"} />
                                        </div>
                                        <progress value="0" max="100" id="uploader">0%</progress>
                                        <br />

                                        <img src="placeholder.jpg" alt="" id={"img"}></img>

                                        <div className={"btn-animation"}>
                                            <button className={"form-btn form__btn-underline"}>Spara</button>
                                        </div>
                                    </div>
                                    
                                </form>

                                
                                

                                <button onClick={this.logOut.bind(this)} className={"form-btn"}>Logout</button>
                                <button onClick={this.deleteAcc.bind(this)} className={"form-btn"}>DELTE ACC</button>
                            </section>
                        </div>

                    )

                    :


                    (
                        <div>
                                </div>
                    )

                }

            </div>
        )

    }
}

export default UserProfile;