import React , {Component} from "react";

class Form extends Component{

    constructor(props){
        super(props);

        this.state = { 

            name: undefined,
            bookedTime: undefined,
            phoneNr: undefined
        }
    }


    render() {
        return (
            <div>
                <form>
                    <input type={"text"} placeholder={"Name"}></input>
                    <input type={"text"} placeholder={"Pick a day!"}></input>
                    <input type={"number"} placeholder={"Telephone"}></input>
                    <input type={"submit"} value={"Book studio"} ></input>
                </form>
            </div>
        )
    }






}

export default Form;