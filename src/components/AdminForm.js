import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";


class AdminForm extends Component {

    state = {

        //title: " ",
        image: " "

    }

    eventChange(e) {
        console.log(e.target.files[0]);
        this.setState({ image: e.target.files[0] })
    }

    async onSubmitToApi(e) {
        e.preventDefault();


        //this.setState({title: e.target.elements.title.value});

        const res = await axios.post("http://localhost:1337/products", {
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

        return (

            <div>

                <Navbar />
                <section className={"contact"}>

                <h2 className={"contact__header"}>Upload</h2>
                    <form onSubmit={this.onSubmitToApi.bind(this)}>
                        <div className={"form__container"}>
                            <div className={"form__group field"}>
                                <input type={"text"} className={"form__field"} name={"title"} id={"title"} />
                                <label htmlFor={"title"} className={"form__label"}>Title</label>
                            </div>
                            <div className={"form__group field"}>
                                <input type={"description"} className={"form__field"} name={"description"} id={"desc"} /> <br />
                                <label htmlFor={"desc"} className={"form__label"}>Description</label>
                            </div>
                            <div className={"form__group field"}>
                                <input type={"number"} className={"form__field"} name={"price"} id={"price"} /> <br />
                                <label htmlFor={"price"} className={"form__label"}>Price</label>
                            </div>
                            <div className={"form__group field"}>
                                <input type={"file"} className={"form__field"} onChange={this.eventChange.bind(this)} name={"file"} />
                            </div>

                            <div className={"btn-animation"}>
                                <button className={"form-btn form__btn-underline"}>Spara</button>
                            </div>
                        </div>
                    </form>
                </section>

                <Footer />

            </div>

        )
    }
}

export default AdminForm;