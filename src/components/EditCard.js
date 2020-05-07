import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/_card.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ErrorLogin from "./ErrorLogin";


class EditCard extends Component {

    state = {

        image: " ",
        jwt: null || localStorage.getItem("jwt")

    }

    eventChange(e) {
        console.log(e.target.files[0]);
        this.setState({ image: e.target.files[0] })
    }

    async onSubmitToApi(e) {
        e.preventDefault();

        const res = await axios.put("http://localhost:1337/products/" + localStorage.getItem("id"), {
            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
            price: e.target.elements.price.value

        })
        console.log(res);

        /* För att lägga till bild i strapi */
        const data = new FormData();
        data.append("files", this.state.image);
        data.append("ref", "products");
        data.append("refId", res.data.id);
        data.append("field", "image");

        const img = await axios.post("http://localhost:1337/upload", data)

        console.log(img);

    }

    render() {
        const loggedIn = this.state.user || localStorage.getItem("jwt");

        return (
            
            <div>
                {!loggedIn ?

                    (
                        <ErrorLogin />
                    )

                    :

                    (
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
                                        <div className={"form__group field"}>
                                            <input type={"file"} className={"form__field"} onChange={this.eventChange.bind(this)} name={"file"} />
                                        </div>
                                        <div className={"btn-animation"}>
                                            <button className={"form-btn form__btn-underline"}>Spara</button>
                                        </div>
                                        <br />
                                        <br />
                                        <Link to={"/adminPage"} className={"form-btn form__btn-underline"}>Take me back!</Link>

                                    </div>

                                </form>

                            </section>
                            <Footer />
                        </div>
                    )
                }
            </div>
        )
    }
}

export default EditCard;