import React, {Component} from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";

// register / login
// conditional rendering

class AdminLogin extends Component {

    state = {
        condition: true
    }
    onClickRegister(){
        this.setState({condition:false})
    }
    onClickLogin(){
        this.setState({condition:true})
    }

    render(){

        return(


            <div>
           { /* <Navbar /> */}
            
            
            Login
                {this.state.condition &&
                <form>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password"/>
                    <button>Login</button>
                    <br />
                    <button onClick={this.onClickRegister.bind(this)}>Don't have an account?</button>
                </form>}
            
                {!this.state.condition && 
                <form>
                    <input type="text" placeholder="username" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password"/>
                    <button>Register</button>
                    <br />
                    <button onClick={this.onClickLogin.bind(this)}>Already have an account?</button>
                </form>}

                
                {/* <Footer /> */}
            </div>


        )
    }

        
    
}

export default AdminLogin;