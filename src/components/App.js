import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoAddForm from './TodoAddForm';
import TodoSearch from './TodoSearch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      showCompleted: false,
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
  handleSearch(searchText, showCompleted) {
    this.setState({searchText, showCompleted});
  }
  handleAddTodo(todo) {
    console.log(`new todo added: ${todo}`);
  }
  filterTodos() {
    let {searchText, todos} = this.state;

    return todos.filter((todo) => {
      return todo.text.toLowerCase().includes(searchText.toLowerCase());
    });
  }
  render() {
    const {searchText, showCompleted} = this.state;
    return (
      <div>
        <div>Todo App</div>
        <TodoSearch 
          searchText={searchText}
          showCompleted={showCompleted}
          onSearch={this.handleSearch.bind(this)} />
        <TodoList todos={this.filterTodos()}/>
        <TodoAddForm onAddTodo={this.handleAddTodo.bind(this)} />
      </div>
    );
  }
}

export default App;
