import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../style/_navbar.scss";
import Logout from "./Auth/AdminLogout";
import firebase from "./FirebaseConfig";

class Navbar extends Component{

    componentDidMount(){
        this.renderAdminNav();

        const userBtn = document.querySelector(".userBtn");
        const bookings = document.querySelector(".bookings");

        //To get the profile picture & username in Navbar
        //Sending props from userprofile did not work like intended
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                let navProfilePic = document.querySelector(".navProfilePic");

                firebase.storage().ref("profilepictures/users/" + user.uid + "/profilePic.jpg").getDownloadURL().then(imgUrl => {
                    navProfilePic.src = imgUrl 
                })

                const userId = firebase.auth().currentUser.uid;
                const db = firebase.firestore();
                let bookingRef = db.collection('userData').doc(userId);
                 let getDoc = bookingRef.get()
                 .then(doc => {
                    if (!doc.exists) {
                      console.log('No such document!');
                      
                    } else {
                        
                        userBtn.innerHTML = doc.data().username;
                        userBtn.style.color = "orange";
                        bookings.style.display = "";
                    }
                  })
                  .catch(err => {
                    console.log('Error getting document', err);
                  });
            } else {
                
                bookings.style.display = "none";
            }
        }) 
    }

    renderAdminNav(){
        const logOutBtn = document.getElementById("logOut");
        const uploadBtn = document.querySelector(".upload");
        
        if(localStorage.getItem("jwt") != null){
    
            logOutBtn.style.display = "contents";
            uploadBtn.style.display = "contents";
            
            } 
    }

    render(){
        
        return (

            <nav className={"navbar sticky"}>
    
                <div className={"navbar__items-wrapper"}>
                    <ul className={"navbar__items-left-wrapper"}>
                        <li className={"nav-item"}>
                            <Link to={"/"} className={"nav-link"}><div className={"spring-logo"}></div></Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to={"/studios"} className={"nav-link underline"}>Studios</Link>
                        </li>
                    </ul>
    
                    <ul className={"navbar__items-right-wrapper"}>
                        <li className={"nav-item bookings"}>
                            <Link to={"/bookings"} className={"nav-link underline bookings"}>My Bookings</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to={"/userpage"} className={"nav-link underline userBtn"}>Log in</Link>
                        </li>
                        <li className={"nav-item"}>
                            <img src="" style={{height: 30 + "px"}} alt={""} className={"navProfilePic"}></img>
                        </li>
                        <li className={"nav-item"}>
                            <Link to={"/adminPage"} className={"nav-link underline"} >Admin</Link>
                        </li>
                        <li className={"nav-item upload-wrapper"}>
                            <Link to={"/upload"} className={"nav-link underline upload"} >Upload</Link>
                        </li>
                        <li className={"nav-item logOut"}>
                            <Logout class={"nav-link underline"} />
                        </li>
                    </ul>
                </div>
    
            </nav>
        )
    }
    

}

export default Navbar;