import React, {Component} from "react";
import AdminLogin from "./Auth/AdminLogin";
import AdminProfile from "./Auth/AdminProfile";

class AdminPage extends Component{

    state={
        user: true
    }

    findUserInfo(e){
        console.log(e)
    }

    render(){

        return(

            <div>
            {!this.state.condition && <AdminLogin userInfo={(this.findUserInfo)} />}
            
            
            {this.state.condition && <AdminProfile />}
            
            </div>
        )
    }
}

export default AdminPage;