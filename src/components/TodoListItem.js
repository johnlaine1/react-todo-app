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
          onClick={this.handleToggleTodo.bind(this)}
          className="col-sm-6 col-sm-offset-3 text-left">
          <li
            className="list-group-item">
            <input 
              type="checkbox" 
              defaultChecked={completed} /> {text}
          </li>
        </div>
      </div>
    );
  }
}

export default TodoListItem;