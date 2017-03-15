import React, {Component} from 'react';

class TodoListItem extends Component {
  handleToggleTodo() {
    this.props.onToggleTodo(this.props.id);
  }
  render() {
    const {text, completed} = this.props;
    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3 text-left">
          <li 
            onClick={this.handleToggleTodo.bind(this)} 
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