import React, { Component } from "react";
import UserLogin from "./UserLogin";
import UserProfile from "./UserProfile";
import firebase from "../FirebaseConfig";

class UserPage extends Component {

    state = {

        user: null || localStorage.getItem("userInfo"),
        displayName: ""
    
    }


    render() {
        const loggedIn = this.state.user || localStorage.getItem("userInfo");

        return (

            <div>

                {!loggedIn ?

                    (<UserLogin userInfo={(e) => {

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
                            
                        }}

                    />)

                    :

                    (<UserProfile userData={this.state.displayName} />)
                }



            </div>
        )
    }
}

export default UserPage;