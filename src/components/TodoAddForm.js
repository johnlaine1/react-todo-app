import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startAddTodo} from '../actions';

class TodoAddForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const {startAddTodo} = this.props;
    const todo = this.refs.todoTitle;
    
    if (!todo.value) {
      todo.focus();
    } else {
      startAddTodo(todo.value);
      todo.value = '';
    }
  }
  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <input ref="todoTitle" type="text" placeholder="What do you need to do?"/>
          </div>
          <div>
            <button className="btn btn-primary" type="submit">Add Todo</button>
          </div>
        </form>
      </div>  
    );
  }
}

export default connect(null, {startAddTodo})(TodoAddForm);