import React, {Component} from 'react';

class TodoListItem extends Component {
  render() {
    const {id, text} = this.props;
    return (
      <div>
        <p>{`${id}. ${text}`}</p>
      </div>
    );
  }
}

export default TodoListItem;