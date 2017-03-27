import React, {Component} from 'react';
import moment from 'moment';

class TodoListItem extends Component {
  handleToggleTodo() {
    this.props.onToggleTodo(this.props.id);
  }
  renderDates() {
    const {completed, createdAt, completedAt} = this.props;
    const dateFormat = 'MMMM Do, YYYY @ h:mm A';
    const createdMessage = <p>{'Created: ' + moment.unix(createdAt).format(dateFormat)}</p>;
    const completedMessage = <p>{'Completed: ' + moment.unix(completedAt).format(dateFormat)}</p>;
    
    return <div>{createdMessage}{completed ? completedMessage : null}</div>;
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
              checked={completed} />
            <p>{text}</p>
            {this.renderDates()}
          </li>
        </div>
      </div>
    );
  }
}

export default TodoListItem;