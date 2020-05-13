import React, { Component } from "react";
import AdminLogin from "./Auth/AdminLogin";
import AdminProfile from "./Auth/AdminProfile";

class AdminPage extends Component {

    state = {
        admin: null || localStorage.getItem("admin"),
        jwt: null
    }


    render() {
        const loggedIn = this.state.admin || localStorage.getItem("jwt");

        return (

            <div>

                {!loggedIn ?

                    (<AdminLogin adminInfo={(e) => {

                        this.setState({ admin: e.username, jwt: e.jwt });
                        localStorage.setItem("jwt", this.state.jwt);
                        localStorage.setItem("admin", this.state.admin);
                    }
                    } />)

                    :

                    (<AdminProfile adminData={this.state.admin} />)
                }



            </div>
        )
    }
}

export default AdminPage;