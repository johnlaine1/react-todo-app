import React, {Component} from 'react';

class TodoSearch extends Component {
  handleSearchChange() {
    const searchText = this.refs.searchText.value;
    const showCompleted = this.refs.showCompleted.checked;
    
    this.props.onSearch(searchText, showCompleted);
  }
  render() {
    return (
      <div>
        <div className="form-group">
          <label>
            <input 
              onChange={this.handleSearchChange.bind(this)}
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
              onChange={this.handleSearchChange.bind(this)}/> 
              Show completed todos
          </label>
        </div>
      </div>
    );
  }
}

export default TodoSearch;