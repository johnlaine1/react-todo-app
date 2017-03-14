import React, {Component} from 'react';

class TodoAddForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const {onAddTodo} = this.props;
    const todo = this.refs.todoTitle;
    
    if (!todo.value) {
      todo.focus();
      console.log('Please enter a title for the todo');
    } else {
      onAddTodo(todo.value);
      todo.value = '';
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input ref="todoTitle" type="text" placeholder="What do you need to do?"/>
          <button type="submit">Add Todo</button>
        </form>
      </div>  
    );
  }
}

export default TodoAddForm;