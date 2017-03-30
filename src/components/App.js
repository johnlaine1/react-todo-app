import React, { Component } from 'react';

import TodoList from './TodoList';
import TodoAddForm from './TodoAddForm';
import TodoSearch from './TodoSearch';


class App extends Component {
  render() {
    return (
      <div className="container text-center">
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

export default App;
