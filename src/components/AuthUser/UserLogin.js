import React, { Component } from "react";
import firebase from "../../components/FirebaseConfig";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../style/_Form.scss";

// register / login
// conditional rendering

class UserLogin extends Component {

    state = {
        condition: true,
        user: ""
    }
    onClickRegister() {
        this.setState({ condition: false })
    }
    onClickLogin() {
        this.setState({ condition: true })
    }
    onSubmitLogin(e) {
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => this.props.userInfo(res.user.email));

        // lägg in denna i res här: this.props.showDisplayName(displayName);

    }
    onSubmitRegister(e) {
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const displayName = e.target.elements.username.value;

        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((res) => {
                //Skickar email
                res.user.sendEmailVerification();
                this.props.userInfo(res.user.email)
                this.props.showDisplayName(displayName);
            })


    }

    onClickResetPassword(e) {
        e.preventDefault();
        const auth = firebase.auth();

        const emailAddress = e.target.elements.janne.value;



        auth.sendPasswordResetEmail(emailAddress).then(function() {
            console.log("Email sent.");
        })
    }



    render() {

        return (


            <div>
                <Navbar />



                <section className={"contact"}>
                    {this.state.condition &&

                        <div>

                            <form onSubmit={this.onSubmitLogin.bind(this)}>
                                <h2 className={"contact__header"}>Login!</h2>
                                <div className={"form__container"}>
                                    <div className={"form__group field"}>
                                        <input type="email" className={"form__field"} placeholder="email" name="email" id="email" />
                                        <label htmlFor={"email"} className={"form__label"}>Email</label>
                                    </div>
                                    <div className={"form__group field"}>
                                        <input type="password" className={"form__field"} placeholder="password" name="password" id="password" />
                                        <label htmlFor={"password"} className={"form__label"}>Password</label>
                                    </div>
                                    <div className={"btn-animation"}>
                                        <button type={"submit"} className={"form-btn form__btn-underline"}> Login</button>
                                    </div>
                                    <br />
                                    <button onClick={this.onClickRegister.bind(this)} className={"form-btn form__btn-underline"}>Don't have an account?</button>
                                    <br />
                                </div>
                            </form>

                            <form onSubmit={this.onClickResetPassword.bind(this)}>
                                <div className={"form__container"}>
                                    <div className={"form__group field"}>
                                        <input type="text" name="janne" className={"form__field"} />
                                        <label htmlFor={"janne"} className={"form__label"}>Email</label>
                                    </div>
                                    <button className={"form-btn form__btn-underline"}>Forgot password?</button>
                                </div>
                            </form>

                        </div>
                    }

                    {!this.state.condition &&
                        <form onSubmit={this.onSubmitRegister.bind(this)}>
                            <h2 className={"contact__header"}>Register!</h2>
                            <div className={"form__container"}>
                                <div className={"form__group field"}>
                                    <input type="text" className={"form__field"} placeholder="username" name="username" id="username" />
                                    <label htmlFor={"username"} className={"form__label"}>Username</label>
                                </div>
                                <div className={"form__group field"}>
                                    <input type="email" className={"form__field"} placeholder="email" name="email" id="email" />
                                    <label htmlFor={"email"} className={"form__label"}>Email</label>
                                </div>
                                <div className={"form__group field"}>
                                    <input type="password" className={"form__field"} placeholder="password" name="password" id="password" />
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

export default UserLogin;
