import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions';

class Login extends Component {
  onLogin() {
    this.props.startLogin();
  }
  render() {
    return (
      <div className="container text-center">
        <div className="page-header">
          <h1>Todo App</h1>
        </div>
        <div>
          <h3>Login</h3>
          <p>Login with GitHub account</p>
          <button onClick={this.onLogin.bind(this)} className="btn btn-primary">Login with Github</button>
        </div>
      </div>
    );
  }
}

export default connect(null, {startLogin})(Login);
