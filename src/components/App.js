import React, { Component } from 'react';
import uuid from 'node-uuid';

import TodoList from './TodoList';
import TodoAddForm from './TodoAddForm';
import TodoSearch from './TodoSearch';
import TodoAPI from '../api/TodoAPI';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      showCompleted: false,
      todos: TodoAPI.getTodos()
    };
  }
  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }
  handleSearch(searchText, showCompleted) {
    this.setState({searchText, showCompleted});
  }
  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  }
  handleToggleTodo(id) {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    
    this.setState({
      todos: updatedTodos
    });
  }
  filterTodos() {
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
      <div className="container text-center">
        <div className="page-header">
          <h1>Todo App</h1>
        </div>
        <TodoSearch
          className="text-center"
          searchText={searchText}
          showCompleted={showCompleted}
          onSearch={this.handleSearch.bind(this)} />
        <TodoList 
          onToggleTodo={this.handleToggleTodo.bind(this)}
          todos={this.filterTodos()}/>
        <TodoAddForm onAddTodo={this.handleAddTodo.bind(this)} />
      </div>
    );
  }
}

export default App;
