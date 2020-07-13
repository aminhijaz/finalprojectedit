import React, { Component } from "react";
import HomePage from './HomePage';


export default class SignUpPage extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label>ID Number</label>
                    <input type="text" className="form-control" placeholder="Enter Your ID" />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" placeholder="Enter Your num" />
                </div>


                <button type="submit" className="btn btn-primary btn-block" >Sign Up</button>

                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}