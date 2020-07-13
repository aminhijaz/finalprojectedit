import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import {auth} from './Firebase'
class App extends React.Component {
  constructor() {
    super()
    this.state={
      user: null
    }
  }
  componentDidMount() {
    this.authListener()
  }
  authListener() {
    auth.onAuthStateChanged((user) =>{
      if(user) {
        this.setState({user})
      }
      else {
        this.setState({user: null})
      }
    })
  }
  render() {
    return (<Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}></Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route path = "/home"  exact component = {HomePage}/>
             {this.state.user ? <Redirect to= '/'/> :  <Route path="/sign-in" component={LoginPage} />}
              <Route path="/sign-up" component={SignUpPage} />
            </Switch>
          </div>
        </div>
      </div></Router>
    );
  
  }
}
export default App;
