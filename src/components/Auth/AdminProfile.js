//Admin profile
//Dashboard i framtiden

import React, {Component} from "react";
import AdminStudios from "../AdminStudios";
import ErrorLogin from "../ErrorLogin";


class AdminProfile extends Component{

    state = {

        jwt: null || localStorage.getItem("jwt")

    }


    render(){
        const loggedIn = this.state.user || localStorage.getItem("jwt");

        return(
            <div>

            {!loggedIn ?

                (   
                
                        <ErrorLogin />
                    
                )

                :


                (
                    <AdminStudios name={this.props.userData}/>
                )
                
        }
            
            </div>
        )

    }
}

export default AdminProfile;