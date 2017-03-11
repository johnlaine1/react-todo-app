import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoAddForm from './TodoAddForm';

class App extends Component {
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
  handleAddTodo(todo) {
    console.log(`new todo added: ${todo}`);
  }
  render() {
    const {todos} = this.state;
    
    return (
      <div>
        <div>Todo App</div>
        <TodoList todos={todos}/>
        <TodoAddForm onAddTodo={this.handleAddTodo.bind(this)}/>
      </div>
    );
  }
}

export default App;
