import React, {Component} from "react";
import {Link} from "react-router-dom";



    class Logout extends Component{

        logOut(){
            localStorage.clear();
            window.location.reload(false);
        }

        render(){
            
            return(
    
                <Link to={"/adminPage"} className={this.props.class} id={"logOut"} onClick = {this.logOut.bind(this)}>Logout</Link>

            )
        }
    }

    export default Logout;
 

