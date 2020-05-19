import React, { Component } from "react";
import UserLogin from "./UserLogin";
import UserProfile from "./UserProfile";
import firebase from "../FirebaseConfig";

class UserPage extends Component {

    state = {

        user: "",
        displayName: ""
    
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged( user => this.setState({user: user.email, displayName: user.displayName}))
        
    }


    render() {
        const loggedIn = this.state.user;

        return (

            <div>

                {!loggedIn ?

                    <UserLogin />

                    :

                    <UserProfile userData={this.state.displayName || this.state.user} />
                }



            </div>
        )
    }
}

export default UserPage;

/* userInfo={(e) => {

                        this.setState({ user: e.username });
                       
                        localStorage.setItem("userInfo", this.state.user);
                    }} 
                        showDisplayName = { (username)=>{

                            firebase.auth().onAuthStateChanged( (user)=> {
                                user.updateProfile({
                                    displayName: username
                                }).then( ()=>{
                                    this.setState({displayName: user.displayName})
                                })
                            }) 
                            
                        }} */