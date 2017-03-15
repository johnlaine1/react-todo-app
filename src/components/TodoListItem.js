import React, {Component} from 'react';

class TodoListItem extends Component {
  handleToggleTodo() {
    this.props.onToggleTodo(this.props.id);
  }
  render() {
    const {text, completed} = this.props;
    return (
      <div className="row">
        <div 
          className="col-sm-6 col-sm-offset-3 text-left">
          <li
            className="list-group-item">
            <input 
              onChange={this.handleToggleTodo.bind(this)}
              type="checkbox" 
              checked={completed} /> {text}
          </li>
        </div>
      </div>
    );
  }
}

export default TodoListItem;