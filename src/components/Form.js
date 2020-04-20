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

    handleOnChangeName = (e) => {

        this.setState({name: e.target.value})
        localStorage.setItem("Name", e.target.value);
        
    }
    handleOnChangeTime = (e) => {

        this.setState({bookedTime: e.target.value})
        localStorage.setItem("BookedTime", e.target.value);
        
    }
    handleOnChangeMobile = (e) => {

        this.setState({phoneNr: e.target.value})
        localStorage.setItem("PhoneNr", e.target.value);
    }


    handleOnSubmit(e){
        e.preventDefault();
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type={"text"} placeholder={"Name"} onChange = {this.handleOnChangeName}></input>
                    <input type={"text"} placeholder={"Pick a day!"} onChange = {this.handleOnChangeTime}></input>
                    <input type={"number"} placeholder={"Telephone"} onChange = {this.handleOnChangeMobile}></input>
                    <button type={"submit"} >Book studio</button>
                </form>

                <div>{this.state.name}</div>
                <div>{this.state.bookedTime}</div>
                <div>{this.state.phoneNr}</div>
            </div>
        )
    }

}

export default Form;
