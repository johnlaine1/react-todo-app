import React, {Component} from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
  renderTodos(){
    const {todos} = this.props;
    return todos.map((todo) => {
      return (
        <TodoListItem key={todo.id} onToggleTodo={this.props.onToggleTodo} {...todo} />
      );
    });
  }
  render() {
    return (
      <div>
        <h3>Todos</h3>
        <ul className="list-group">
          {this.renderTodos()}
        </ul>
      </div>
    );
  }
}

export default TodoList;