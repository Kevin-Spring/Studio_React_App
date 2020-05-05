//Admin profile
//Dashboard i framtiden

import React, {Component} from "react";


class AdminProfile extends Component{


    render(){

        return(
            <div>

            {this.props.userData}
            
            </div>
        )

    }
}

export default AdminProfile;