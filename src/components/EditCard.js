import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/_card.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";


class EditCard extends Component {

    async onSubmitToApi(e) {
        e.preventDefault();

        const res = await axios.put("http://localhost:1337/products/" + localStorage.getItem("id"), {
            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
            price: e.target.elements.price.value

        })
        console.log(res);

    }

    render() {
        return (
            <div>

                <Navbar />
                <section className={"contact"}>

                    <h2 className={"contact__header"}>Edit Post</h2>
                    <form onSubmit={this.onSubmitToApi.bind(this)}>
                        <div className={"form__container"}>
                            <div className={"form__group field"}>
                                <input type={"text"} className={"form__field"} name={"title"} defaultValue={localStorage.getItem("title")} id="title" /> <br />
                                <label htmlFor={"title"} className={"form__label"}>Title</label>
                            </div>
                            <div className={"form__group field"}>
                                <textarea name={"description"} className={"form__field"} defaultValue={localStorage.getItem("description")} id="desc" cols={"30"} rows={"10"} /> <br />
                                <label htmlFor={"desc"} className={"form__label"}>Description</label>
                            </div>
                            <div className={"form__group field"}>
                                <input type={"number"} className={"form__field"} name={"price"} defaultValue={localStorage.getItem("price")} id="price" /> <br />
                                <label htmlFor={"price"} className={"form__label"}>Price</label>
                            </div>
                            <div className={"btn-animation"}>
                                <button className={"form-btn form__btn-underline"}>Spara</button>
                            </div>
                            <br />
                            <br/>
                            <Link to={"/studios"} className={"form-btn form__btn-underline"}>Take me back!</Link>

                        </div>

                    </form>

                </section>
                <Footer />
            </div>
        )
    }
}

export default EditCard;