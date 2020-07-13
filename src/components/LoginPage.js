import React, { Component } from "react";
import HomePage from "./HomePage";
import {auth} from '../Firebase'
export default class LoginPage extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.signin= this.signin.bind(this)
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    
    }
    signin(event) {
        event.preventDefault();
        auth.signInWithEmailAndPassword(this.state.email,this.state.password).then((res)=>{
             alert(res)
         }).catch((err)=>{
             console.log(err);
         })
 
    }
    render() {
        return (
            <form>
                <h3>Log In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" value={this.state.email} type="email" className="form-control" placeholder="Enter email" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="password" value={this.state.password} className="form-control" placeholder="Enter password" onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button  onClick = {this.signin} type="submit" className="btn btn-primary btn-block" >Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}