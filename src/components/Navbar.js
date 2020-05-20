import React, {Component} from "react";
import { Link } from "react-router-dom";
import "../style/_navbar.scss";
import Logout from "./Auth/AdminLogout";
import firebase from "./FirebaseConfig";

class Navbar extends Component{

    componentDidMount(){
        this.renderAdminNav();
        this.renderUserNav();
    }

    renderAdminNav(){
        const logOutBtn = document.getElementById("logOut");
        const uploadBtn = document.querySelector(".upload");
        
        if(localStorage.getItem("jwt") != null){
    
            logOutBtn.style.display = "contents";
            uploadBtn.style.display = "contents";
            
            } 
    }

    renderUserNav(){
        const userBtn = document.querySelector(".userBtn");
       
        
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              userBtn.innerHTML = user.email;
              userBtn.style.color = "orange";
             
            } else {
              // No user is signed in.
                

            }
          });
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
                        <li className={"nav-item"}>
                            <Link to={"/bookings"} className={"nav-link underline"}>Bookings</Link>
                        </li>
                        <li className={"nav-item"}>
                            <Link to={"/userpage"} className={"nav-link underline userBtn"}>Log in</Link>
                        </li>
                        <li className={"nav-item"}>
                            <img src={localStorage.getItem("profilePic")} style={{height: 30 + "px"}} alt={""}></img>
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