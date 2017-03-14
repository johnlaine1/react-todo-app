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
          completed: true,
          text: 'Feed the cat (complete)'
        },
        {
          id: 2,
          completed: false,
          text: 'Pay taxes (incomplete)'
        },
        {
          id: 3,
          completed: true,
          text: 'Paint the house (complete)'
        },
        {
          id: 4,
          completed: false,
          text: 'Change oil in car (incomplete)'
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
    console.log(this.state.searchT)
    let {searchText, showCompleted, todos} = this.state;
    searchText = searchText.toLowerCase();
    
    return todos.filter((todo) => {
      if (!showCompleted) {
        return !todo.completed && todo.text.toLowerCase().includes(searchText);
      } else {
        return todo.text.toLowerCase().includes(searchText);
      }
      
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
