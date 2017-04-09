import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startAddTodo} from '../actions';

class TodoAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {formInputTitle: ''};
  }
  handleSubmit(e) {
    e.preventDefault();
    const {startAddTodo} = this.props;
    const todo = this.state.formInputTitle;
    const todoInputField = this.refs.todoTitle;
    
    if (!todo) {
      todoInputField.focus();
    } else {
      startAddTodo(todo);
      this.setState({formInputTitle: ''});
    }
  }
  handleChange(e) {
    e.preventDefault();
    const title = e.target.value;
    this.setState({formInputTitle: title});
  }
  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <input value={this.state.formInputTitle} 
             onChange={this.handleChange.bind(this)} 
             ref="todoTitle" 
             type="text" 
             placeholder="What do you need to do?"/>
          </div>
          <div>
            <button className="btn btn-primary" type="submit">Add Todo</button>
          </div>
        </form>
      </div>  
    );
  }
}

export default connect(null, {startAddTodo})(TodoAddForm);