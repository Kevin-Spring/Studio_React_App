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

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({user: user.email, displayName: user.displayName})
            }
            
        
        })
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
