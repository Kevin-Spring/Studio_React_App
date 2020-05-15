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
    deleteAcc(){
        var user = firebase.auth().currentUser;

        user.delete().then(function() {
        // User deleted.
        }).catch(function(error) {
        // An error happened.
        });
    }


    render(){
        const loggedIn = this.state.user || localStorage.getItem("jwt");

        return(
            <div>

            {!loggedIn ?

                (   
                    <div>
                    <h1>Welcome {this.props.userData} </h1>
                    <button onClick = {this.logOut.bind(this)}>Logout</button>
                    <button onClick = {this.deleteAcc.bind(this)}>DELTE ACC</button>
                    </div>
                    
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