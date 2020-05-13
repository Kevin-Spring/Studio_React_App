import React, { Component } from "react";
import UserLogin from "./UserLogin";
import UserProfile from "./UserProfile";

class UserPage extends Component {

    state = {

        user: null || localStorage.getItem("userInfo")
    
    }


    render() {
        const loggedIn = this.state.user || localStorage.getItem("userInfo");

        return (

            <div>

                {!loggedIn ?

                    (<UserLogin userInfo={(e) => {

                        this.setState({ user: e.email });
                       
                        localStorage.setItem("userInfo", this.state.user);
                    }
                    } />)

                    :

                    (<UserProfile userData={this.state.user} />)
                }



            </div>
        )
    }
}

export default UserPage;