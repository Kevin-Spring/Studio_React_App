import React, { Component } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../style/_Form.scss";

// register / login
// conditional rendering

class AdminLogin extends Component {

    state = {
        condition: true
    }
    onClickRegister() {
        this.setState({ condition: false })
    }
    onClickLogin() {
        this.setState({ condition: true })
    }
    onSubmitLogin(e) {
        e.preventDefault();
        // Request API.
        axios
            .post('http://localhost:1337/auth/local', {
                identifier: e.target.elements.email.value,
                password: e.target.elements.password.value,
            })
            .then(response => {
                // Handle success.
                console.log('Well done!');
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
                this.props.userInfo(response.data.jwt);
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error);
            });
    }
    onSubmitRegister(e) {
        e.preventDefault();

        // Request API.
        // Add your own code here to customize or restrict how the public can register new users.
        axios
            .post('http://localhost:1337/auth/local/register', {
                username: e.target.elements.username.value,
                email: e.target.elements.email.value,
                password: e.target.elements.password.value,
            })
            .then(response => {
                // Handle success.
                console.log('Well done!');
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error);
            });
    }

    render() {

        return (


            <div>
                <Navbar />



                <section className={"contact"}>
                    {this.state.condition &&

                        <form onSubmit={this.onSubmitLogin.bind(this)}>
                            <h2 className={"contact__header"}>Login!</h2>
                            <div className={"form__container"}>
                                <div className={"form__group field"}>
                                    <input type="email" placeholder="email" name="email" id="email" />
                                    <label htmlFor={"email"} className={"form__label"}>Email</label>
                                </div>
                                <div className={"form__group field"}>
                                    <input type="password" placeholder="password" name="password" id="password" />
                                    <label htmlFor={"password"} className={"form__label"}>Password</label>
                                </div>
                                <div className={"btn-animation"}>
                                    <button type={"submit"} className={"form-btn form__btn-underline"}> Login</button>
                                </div>
                                <br />
                                <button onClick={this.onClickRegister.bind(this)} className={"form-btn form__btn-underline"}>Don't have an account?</button>
                            </div>
                        </form>}

                    {!this.state.condition &&
                        <form onSubmit={this.onSubmitRegister.bind(this)}>
                            <h2 className={"contact__header"}>Register!</h2>
                            <div className={"form__container"}>
                                <div className={"form__group field"}>
                                    <input type="text" placeholder="username" name="username" id="username" />
                                    <label htmlFor={"username"} className={"form__label"}>Username</label>
                                </div>
                                <div className={"form__group field"}>
                                    <input type="email" placeholder="email" name="email" id="email" />
                                    <label htmlFor={"email"} className={"form__label"}>Email</label>
                                </div>
                                <div className={"form__group field"}>
                                    <input type="password" placeholder="password" name="password" id="password" />
                                    <label htmlFor={"password"} className={"form__label"}>Password</label>
                                </div>
                                <button type={"submit"} className={"form-btn form__btn-underline"}> Register</button>
                                <br />
                                <button onClick={this.onClickLogin.bind(this)} className={"form-btn form__btn-underline"}>Already have an account?</button>
                            </div>
                        </form>}
                </section>


                <Footer />
            </div>


        )
    }



}

export default AdminLogin;