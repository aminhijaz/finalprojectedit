import React, { Component } from "react";
import HomePage from './HomePage';
import {auth} from '../Firebase'

export default class SignUpPage extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.signup= this.signup.bind(this)
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    
    }
    signup(event) {
        event.preventDefault();         
        auth.createUserWithEmailAndPassword(this.state.email,this.state.password).then((res)=>{
                        alert(res)
                    }).catch((err)=>{
                        alert(err);
                    })
            }      
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input name= "email" type="email" className="form-control" placeholder="Enter email" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" placeholder="Enter password" onChange={this.handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.signup}>Sign Up</button>

                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}