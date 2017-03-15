import React, {Component} from 'react';

class TodoListItem extends Component {
  handleToggleTodo() {
    this.props.onToggleTodo(this.props.id);
  }
  render() {
    const {text, completed} = this.props;
    return (
      <div onClick={this.handleToggleTodo.bind(this)} className="checkbox">
        <input 
          type="checkbox" 
          defaultChecked={completed} /> {text}
      </div>
    );
  }
}

export default TodoListItem;