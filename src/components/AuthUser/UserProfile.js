//Admin profile
//Dashboard i framtiden

import React, { Component } from "react";
import firebase from "../FirebaseConfig";
import logo from "../../img/logo192.png";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../style/_Form.scss";


class UserProfile extends Component {

    state = {

        username: null,
        image: undefined,
        user: null,
        condition: true

    }

    //To show uploaded file
    componentDidMount(e) {
        this.setState({ user: this.props.userData });


        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase.storage().ref("profilepictures/users/" + user.uid + "/profilePic.jpg").getDownloadURL().then(imgUrl => {
                    this.setState({ image: imgUrl })
                })


                const userId = firebase.auth().currentUser.uid;
                const db = firebase.firestore();
                let bookingRef = db.collection('userData').doc(userId);
                 let getDoc = bookingRef.get()
                 .then(doc => {
                    if (!doc.exists) {
                      console.log('No such document!');
                      this.setState({username: user.email,
                                    image: logo})
                    } else {
                        this.setState({username: doc.data().username})
                    }
                  })
                  .catch(err => {
                    console.log('Error getting document', err);
                  });
            }
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
    onClickEditProfile() {
        this.setState({ condition: false })
    }
    onClickBackToProfile() {
        this.setState({ condition: true })
    }

    //To upload file
    profilePic(e) {

        //Get elements
        let uploader = document.getElementById("uploader");
        let previewImg = document.getElementById("img");
        let user = firebase.auth().currentUser.uid;

        // get File
        let file = e.target.files[0];
        console.log(file)

        // create storge ref
        //Use file.name for dynamic profile pic names instead of 'profilePic.jpg'
        let storageRef = firebase.storage().ref("profilepictures/users/" + user + "/profilePic.jpg");
        //uplad file
        let task = storageRef.put(file);
        //progress bar
        task.on('state_changed',

            function progress(snapshot) {
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploader.value = percentage;
            },

            function error(err) {
                console.log(err);
            },

            function complete() {
                console.log("successfully uploaded");
            }

        )

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase.storage().ref("profilepictures/users/" + user.uid + "/profilePic.jpg").getDownloadURL().then(imgUrl => {

                    this.setState({ image: imgUrl })
            
                    
                    previewImg.src= this.state.image;


                })
            }
        })
    }

    OnSubmitEditProfile(e){
        e.preventDefault();
        
        const userId = firebase.auth().currentUser.uid;
        
        const db = firebase.firestore();

        let data = {

            username: e.target.elements.username.value,
            profilePic: this.state.image
        }

        if (firebase.auth().currentUser) {

                db.collection("userData").doc(userId)
                .set(data)
        } 

        this.setState({condition:true})
        this.setState({username: e.target.elements.username.value})
    }


    render() {

        const loggedIn = this.state.user;

        //user this.props.userData for users email


        return (
            <div>
                <Navbar username={this.state.username} profilePic={this.state.image}/>

                <section className={"contact"}>

                    {loggedIn && this.state.condition === true &&

                        (
                            <div>

                                <h2 className={"contact__header"}>Welcome {this.state.username} </h2>
                                <img src={this.state.image} style={{ height: 300 + "px", paddingLeft: 38 + "%" }} alt={""}></img>


                                <div>
                                    <button onClick={this.onClickEditProfile.bind(this)} className={"form-btn"}>Edit Profile</button>

                                    <button onClick={this.logOut.bind(this)} className={"form-btn"}>Logout</button>

                                </div>

                            </div>

                        )

                    }

                    {loggedIn && this.state.condition === false &&

                        <div>

                            <h2 className={"contact__header"}>Edit Profile </h2>

                            <form onSubmit={this.OnSubmitEditProfile.bind(this)}>
                                <div className={"form__container"}>



                                    <img src={this.state.image} id={"img"}  style={{ height: 300 + "px", paddingLeft: 38 + "%" }} alt={""}></img>
                                    

                                    <div className={"form__group field"}>
                                        <input type={"text"} className={"form__field"} placeholder={"Username"} name={"username"} id={'username'} required />
                                        <label htmlFor={"username"} className={"form__label"}>Username</label>
                                    </div>

                                    <div className={"form__group field"}>
                                        <input type={"file"} className={"form__field img"} onChange={this.profilePic.bind(this)} name={"file"} id={"fileButton"} />
                                        <progress value="0" max="100" id="uploader">0%</progress>
                                    </div>
                                    
                                    <br />





                                    <div className={"btn-animation"}>
                                        <button className={"form-btn form__btn-underline"}>Spara</button>
                                    </div>
                                </div>

                            </form>

                            <button onClick={this.deleteAcc.bind(this)} className={"form-btn"}>DELETE ACCOUNT</button>

                            <br />

                            <button onClick={this.onClickBackToProfile.bind(this)} className={"form-btn"}>Go Back</button>


                        </div>


                    }

                </section>

                <Footer />
                
            </div>

            
        )

    }
}

export default UserProfile;