import uuid from 'uuid/v1';
import moment from 'moment';
import {CREATE_TODO, DELETE_TODO, TOGGLE_COMPLETE_TODO, CREATE_TODOS} from '../actions';


const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return [
        ...state,
        action.payload
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    case TOGGLE_COMPLETE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          const toggledCompleted = !todo.completed;
          
          return {
            ...todo,
            completed: toggledCompleted,
            completedAt: toggledCompleted ? moment().unix() : null
          };
        }
        return todo;
      });
    case CREATE_TODOS:
      return [
        ...state,
        ...action.payload
      ];
    default:
      return state;
  }
};