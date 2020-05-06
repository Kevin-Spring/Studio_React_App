//Admin profile
//Dashboard i framtiden

import React, {Component} from "react";
import AdminStudios from "../AdminStudios";


class AdminProfile extends Component{


    render(){

        return(
            <div>

            <AdminStudios />
            {this.props.userData}
            
            </div>
        )

    }
}

export default AdminProfile;