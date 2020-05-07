import React, { Component } from "react";
import AdminLogin from "./Auth/AdminLogin";
import AdminProfile from "./Auth/AdminProfile";

class AdminPage extends Component {

    state = {
        user: null || localStorage.getItem("user"),
        jwt: null
    }


    render() {
        const loggedIn = this.state.user || localStorage.getItem("jwt");

        return (

            <div>

                {!loggedIn ?

                    (<AdminLogin userInfo={(e) => {

                        this.setState({ user: e.username, jwt: e.jwt });
                        localStorage.setItem("jwt", this.state.jwt);
                        localStorage.setItem("user", this.state.user);
                    }
                    } />)

                    :

                    (<AdminProfile userData={this.state.user} />)
                }




                {/* {!this.state.user && <AdminLogin userInfo = { (e) => this.setState( {user:e.username} ) } />}
                {this.state.user && <AdminProfile userData = {this.state.user} />} */}



            </div>
        )
    }
}

export default AdminPage;