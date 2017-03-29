import uuid from 'uuid/v1';
import {CREATE_TODO, DELETE_TODO} from '../actions';


const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  const {id, genre, title} = action.payload;
  switch (action.type) {
    case CREATE_TODO:
      return [
        ...state,
        {
          id: uuid(),
          genre,
          title
        }
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== id);
    default:
      return state;
  }
};