import React, {Component} from 'react';

class TodoAddForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const {onAddTodo} = this.props;
    const todo = this.refs.todoTitle;
    
    if (!todo.value) {
      todo.focus();
    } else {
      onAddTodo(todo.value);
      todo.value = '';
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <input ref="todoTitle" type="text" placeholder="What do you need to do?"/>
          </div>
          <div>
            <button className="btn btn-primary add-todo-btn" type="submit">Add Todo</button>
          </div>
        </form>
      </div>  
    );
  }
}

export default TodoAddForm;