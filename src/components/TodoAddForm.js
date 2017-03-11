import React, {Component} from 'react';

class TodoAddForm extends Component {
  onSubmit(e) {
    e.preventDefault();
    const {onAddTodo} = this.props;
    const todo = this.refs.todoTitle;
    
    if (!todo.value) {
      console.log('Please enter a title for the todo');
    } else {
      onAddTodo(todo.value);
      todo.value = '';
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input ref="todoTitle" type="text" placeholder="Todo Description"/>
          <button type="submit">Add Todo</button>
        </form>
      </div>  
    );
  }
}

export default TodoAddForm;