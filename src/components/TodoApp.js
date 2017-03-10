import React, { Component } from 'react';
import TodoList from './TodoList';

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
        },
        {
          id: 3,
          text: 'Paint the house'
        },
        {
          id: 4,
          text: 'Change oil in car'
        }
    ]
    };
  }
  render() {
    const {todos} = this.state;
    
    return (
      <div>
        <div>Todo App</div>
        <TodoList todos={todos}/>
      </div>
    );
  }
}

export default TodoApp;
