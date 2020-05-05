import React, {Component} from "react";
import AdminLogin from "./Auth/AdminLogin";
import AdminProfile from "./Auth/AdminProfile";

class AdminPage extends Component{

    state={
        user: null
    }

    

    render(){

        return(

            <div>

                {!this.state.user && <AdminLogin userInfo = { (e) => this.setState( {user:e.username} ) } />}
                
                
                {this.state.user && <AdminProfile userData = {this.state.user} />}


                
            </div>
        )
    }
}

export default AdminPage;