//Admin profile
//Dashboard i framtiden

import React, {Component} from "react";
import firebase from "../FirebaseConfig";


class UserProfile extends Component{

    state = {

        user: null

    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ user: this.props.userData });
            console.log(user);
        })
    }

    

    logOut(){
        localStorage.clear();
        window.location.reload(false);
        firebase.auth().signOut();
    }
    deleteAcc(){
        var user = firebase.auth().currentUser;

        user.delete().then(function() {
            localStorage.clear();
            window.location.reload(false);
            alert("Your account was successfully deleted!")
        }).catch(function(error) {
        alert(error)
        });

        
    }


    render(){
        const loggedIn = this.state.user;

        return(
            <div>

            {loggedIn ?

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