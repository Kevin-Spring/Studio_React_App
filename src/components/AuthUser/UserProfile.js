//Admin profile
//Dashboard i framtiden

import React, {Component} from "react";
import firebase from "../FirebaseConfig";


class UserProfile extends Component{

    state = {

        jwt: null || localStorage.getItem("jwt")

    }

    logOut(){
        localStorage.clear();
        window.location.reload(false);
        firebase.auth().signOut();
    }


    render(){
        const loggedIn = this.state.user || localStorage.getItem("jwt");

        return(
            <div>

            {!loggedIn ?

                (   
                
                    <button onClick = {this.logOut.bind(this)}>Logout</button>
                    
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