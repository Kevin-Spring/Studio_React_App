//Admin profile
//Dashboard i framtiden

import React, { Component } from "react";
import firebase from "../FirebaseConfig";
import Navbar from "../Navbar";
import "../../style/_Form.scss";


class UserProfile extends Component {

    state = {

        image: undefined,
        user: null,
        condition: true

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
    onClickEditProfile(){
        this.setState({condition : false})
    }
    onClickBackToProfile(){
        this.setState({condition : true})
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

          firebase.auth().onAuthStateChanged(user =>{
             if(user){
                 firebase.storage().ref("profilepictures/" + "users/" + user.uid + "/" + file.name).getDownloadURL().then(imgUrl => {
                     
                     this.setState({image:imgUrl})
                     console.log(this.state.image)

                     
                 })
             }
         })
    }


    //To upload file
    onSubmitToFirebase() {
         

         localStorage.setItem("profilePic", this.state.image);
        
    }

    render() {

        const loggedIn = this.state.user;


        return (
            <div>
                <Navbar />

                <section className={"contact"}>

                {loggedIn && this.state.condition === true &&

                    (
                        <div>
                            
                                <h2 className={"contact__header"}>Welcome {this.props.userData} </h2>
                                <img src={localStorage.getItem("profilePic")} style={{height: 300 + "px", paddingLeft: 38 + "%" }} alt={""}></img>


                                <div>
                                <button onClick={this.onClickEditProfile.bind(this)} className={"form-btn"}>Edit Profile</button>

                                <button onClick={this.logOut.bind(this)} className={"form-btn"}>Logout</button>
                            
                                </div>
                           
                        </div>

                    )

                }

                {loggedIn && this.state.condition === false &&
                
                    <div>
                            
                                <h2 className={"contact__header"}>Welcome {this.props.userData}  </h2>

                                <form onSubmit={this.onSubmitToFirebase.bind(this)}>
                                    <div className={"form__container"}>



                                    <img src={this.state.image} alt="" id={"img"}></img>

                                        <div className={"form__group field"}>
                                            <input type={"file"} className={"form__field img"} onChange={this.profilePic.bind(this)} name={"file"} id={"fileButton"} />
                                        </div>
                                        <progress value="0" max="100" id="uploader">0%</progress>
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

            </div>
        )

    }
}

export default UserProfile;