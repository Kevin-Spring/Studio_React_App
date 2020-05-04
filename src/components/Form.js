import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../style/_Form.scss";

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {

            name: undefined,
            bookedTime: undefined,
            phoneNr: undefined
        }
    }

    handleOnChangeName = (e) => {

        this.setState({ name: e.target.value })
        localStorage.setItem("Name", e.target.value);

    }
    handleOnChangeTime = (e) => {

        this.setState({ bookedTime: e.target.value })
        localStorage.setItem("BookedTime", e.target.value);

    }
    handleOnChangeMobile = (e) => {

        this.setState({ phoneNr: e.target.value })
        localStorage.setItem("PhoneNr", e.target.value);
    }


    handleOnSubmit(e) {
        e.preventDefault();

    }

    render() {
        return (
            <div>

                <section className={"contact"}>
                <h2 className={"contact__header"}>get in touch!</h2>
       
                <form onSubmit={this.handleOnSubmit} method="post" enctype="text/plain">
                    <div className={"form__container"}>
                        <div className={"form__group field"}>
                            <input type={"text"} className={"form__field"} placeholder={"Name"} name={"name"} id={'name'} onChange={this.handleOnChangeName} required />
                            <label htmlFor={"name"} className={"form__label"}>Name</label>
                        </div>
                        <div className={"form__group field"}>
                            <input type={"text"} className={"form__field"} name={"time"} id={"input__time"} placeholder={"Time"}
                            onChange={this.handleOnChangeTime} required />
                            <label htmlFor={"input__time"} className={"form__label"}>What Time?</label>
                        </div>
                        <div className={"form__group field"}>
                            <input type="number" className={"form__field"} name={"telephone"} id={"input__telephone"} placeholder={"Telephone"}
                            onChange={this.handleOnChangeMobile} required />
                            <label htmlFor={"input__telephone"} className={"form__label"}>Telephone</label>
                        </div>
                        <div className={"form__group field"}>
                            <textarea name={"textarea"} className={"form__field"} id={"textarea"} cols={"30"} rows={"10"}
                                placeholder={"Other thoughts?"}></textarea>
                            <label htmlFor={"textarea"} className={"form__label"}>Anything else?</label>
                        </div>
                        <div className={"btn-animation"}>
                            <button type={"submit"} className={"form-btn"}><Link to={"/bookings"} className={"form__btn-underline"}> SEND!</Link></button>
                        </div>
                    </div>
                </form>

                <div>{this.state.name}</div>
                <div>{this.state.bookedTime}</div>
                <div>{this.state.phoneNr}</div>
                </section>
            </div>
            
        )
    }

}

export default Form;
