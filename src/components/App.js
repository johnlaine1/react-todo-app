import React, { Component } from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

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
    searchText = searchText.toLowerCase();
    this.setState({searchText, showCompleted});
  }
  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: null
        }
      ]
    });
  }
  handleToggleTodo(id) {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : null;
      }
      return todo;
    });
    
    this.setState({
      todos: updatedTodos
    });
  }
  render() {
    const {searchText, showCompleted, todos} = this.state;
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    
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
          todos={filteredTodos}/>
        <TodoAddForm onAddTodo={this.handleAddTodo.bind(this)} />
      </div>
    );
  }
}

export default App;
