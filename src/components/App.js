import React, { Component } from 'react';
import {connect} from 'react-redux';
import {startLogout} from '../actions';
import TodoList from './TodoList';
import TodoAddForm from './TodoAddForm';
import TodoSearch from './TodoSearch';


class App extends Component {
  onLogout(e) {
    e.preventDefault;
    this.props.startLogout();
  }
  render() {
    return (
      <div className="container text-center">
        <div className="page-actions">
          <a onClick={this.onLogout.bind(this)} href="#">Logout</a>
        </div>
        <div className="page-header">
          <h1>Todo App</h1>
        </div>
        <TodoSearch className="text-center" />
        <TodoList />
        <TodoAddForm />
      </div>
    );
  }
}

export default connect(null, {startLogout})(App);
