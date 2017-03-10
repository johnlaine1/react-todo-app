import React, { Component } from 'react';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Feed the cat'
        },
        {
          id: 2,
          text: 'Pay taxes'
        }
      ]
    };
  }
  render() {
    return (
      <div>Todo App</div>
    );
  }
}

export default TodoApp;
