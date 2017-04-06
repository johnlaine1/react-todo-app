import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions';

class Login extends Component {
  onGitHubLogin() {
    this.props.startLogin('github');
  }
  onEmailLogin(e) {
    e.preventDefault();
    const {email, password} = this.refs;
    this.props.startLogin('email', email.value, password.value);
  }
  onEmailCreateAccount(e) {
    e.preventDefault();
    const {newEmail, newPassword} = this.refs;
    this.props.startLogin('emailCreateAccount', newEmail.value, newPassword.value);
  }
  render() {
    return (
      <div className="container text-center">
        <div className="page-header">
          <h1>Todo App</h1>
        </div>
        <div>
          <h2>Login</h2>
          <div className="github-login">
            <button onClick={this.onGitHubLogin.bind(this)} className="btn btn-primary">Login with Github</button>
          </div>
          <hr/>
          <div className="email-login">
            <form onSubmit={this.onEmailLogin.bind(this)}>
              <div><input placeholder="Email" type="email" ref="email" /></div>
              <div><input placeholder="Password" type="password" ref="password" /></div>
              <div>
                <button className="btn btn-primary" type="submit">Login with Email/Password</button>
              </div>
            </form>
          </div>
          <hr/>
          <div className="email-create-account">
            <h3>Create a new Account</h3>
            <form onSubmit={this.onEmailCreateAccount.bind(this)}>
              <div><input placeholder="Email" type="email" ref="newEmail" /></div>
              <div><input placeholder="Password" type="password" ref="newPassword" /></div>
              <div>
                <button className="btn btn-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {startLogin})(Login);
