import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoListItem from './TodoListItem';
import {filterTodos} from '../api/TodoAPI';

class TodoList extends Component {
  renderTodos(){
    const {todos, showCompleted, searchText} = this.props;
    const filteredTodos = filterTodos(todos, showCompleted, searchText);
    return filteredTodos.map((todo) => {
      return (
        <TodoListItem key={todo.id} {...todo} />
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

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    showCompleted: state.showCompletedTodos,
    searchText: state.searchText
  };
};


export default connect(mapStateToProps)(TodoList);