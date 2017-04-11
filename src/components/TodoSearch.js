import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateSearchText, toggleShowCompletedTodos} from '../actions';

class TodoSearch extends Component {
  constructor(props) {
    super(props);
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  onSearchChange() {
    const searchText = this.refs.searchText.value;
    this.props.updateSearchText(searchText);
  }
  onToggleShowCompleted() {
    this.props.toggleShowCompletedTodos();
  }
  render() {
    return (
      <div>
        <div className="form-group">
          <label>
            <input 
              onChange={this.onSearchChange.bind(this)}
              ref="searchText"
              type="search" 
              className="form-control" 
              id="search-text"
              placeholder="Search Todos" />
          </label>
        </div>
        <div className="checkbox">
          <label>
            <input 
              type="checkbox"
              ref="showCompleted"
              onChange={this.onToggleShowCompleted.bind(this)}/> 
              Show completed todos
          </label>
        </div>
      </div>
    );
  }
}

export default connect(null, {updateSearchText, toggleShowCompletedTodos})(TodoSearch);