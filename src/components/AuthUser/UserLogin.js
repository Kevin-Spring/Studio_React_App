import React, { Component } from "react";
import firebase from "../../components/FirebaseConfig";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../style/_Form.scss";
//import UserProfile from "./UserProfile";

// register / login
// conditional rendering

class UserLogin extends Component {

    state = {
        condition: true,
        resetPass: false,
        user: ""
    }

    // Configure FirebaseUI.
    uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '/userprofile',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ]
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ user: user.email });
            user.updateProfile({
                displayName: this.username
        });
            console.log(user);
        })
    }
    component

    onClickRegister() {
        this.setState({ condition: false })
    }
    onClickLogin() {
        this.setState({ condition: true })
    }
    onClickResetPassword() {
        this.setState({
            condition: "",
            resetPass: true
        })
    }
    onSubmitLogin(e) {
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        //const displayName = e.target.elements.email.value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                //this.props.userInfo(res.user.email)
                //this.props.showDisplayName(email);
                console.log("Successfull Login")
            })
            .catch(function (error) {
                alert(error)
            });

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
                //res.user.sendEmailVerification();
                //this.props.userInfo(res.user.email)
                //this.props.showDisplayName(displayName);
                console.log("Successfull Register!")
            }).catch(function (error) {
                alert(error)
            });


    }

    onSubmitResetPassword(e) {
        e.preventDefault();
        const auth = firebase.auth();

        const emailAddress = e.target.elements.janne.value;



        auth.sendPasswordResetEmail(emailAddress)
            .then(function () {
                alert("Email sent!")
            }).catch(function (error) {
                alert(error)
            });

        this.setState({
            condition: true,
            resetPass: false
        })
    }

    



    render() {


        return (


            <div>
                <Navbar />



                <section className={"contact"}>
                    {this.state.condition === true &&

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

                                    <button onClick={this.onClickRegister.bind(this)} className={"form-btn acc form__btn-underline"}>Don't have an account?</button>
                                    <button onClick={this.onClickResetPassword.bind(this)} className={"form-btn pass"}>Forgot password?</button>
                                </div>
                            </form>
                        </div>
                    }

                    {this.state.condition === false &&
                        <div>
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
                            </form>

                            <h2> OR</h2>

                            <div>
                                <h1>My App</h1>
                                <p>Please sign-in:</p>
                                <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                            </div>

                            {/* this.state.user? <UserProfile userData={this.state.user}/> : <div></div> */}

                        </div>
                    }

                    {this.state.resetPass &&
                        <div>
                            <h2 className={"contact__header"}>Reset Password</h2>
                            <form onSubmit={this.onSubmitResetPassword.bind(this)}>
                                <div className={"form__container"}>
                                    <div className={"form__group field"}>
                                        <input type="email" name="janne" className={"form__field"} required />
                                        <label htmlFor={"janne"} className={"form__label"}>Email</label>
                                    </div>
                                    <button className={"form-btn form__btn-underline"}>Reset Password</button>
                                </div>
                            </form>
                        </div>
                    }
                </section>


                <Footer />

            </div>


        )
    }



}

export default UserLogin;
