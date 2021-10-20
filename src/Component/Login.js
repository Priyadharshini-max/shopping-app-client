import React, { Component } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001/login";

export default class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            email: ""
        }
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }
    handleSubmit = async (e) => {
        e.preventDefault();
            try {
                const { email } = this.state;
                await axios.post(API_URL, {
                    email
                });
                
                localStorage.setItem("user", email);
                this.props.history.push("/allproduct");
            }
            catch (err) {
                alert(err.response.data.error);
            }
        
    }

    render() {
        return (

            <div className="main">
                <div><h4 className="heading">Shopping App</h4></div>
                <div><h3 className="subheading">Login</h3></div>
                <form>
                    <div className="loginform">
                        <div className="textbox"><input type="email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} className="inputfield" /></div>
                        <div className="submitdiv"><input type="submit" value="Submit" onClick={this.handleSubmit} className="submitbtn" /></div>
                    </div>
                </form>
            </div>

        )
    }
}