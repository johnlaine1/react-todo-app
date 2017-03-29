import {UPDATE_SEARCH_TEXT} from '../actions';

const INITIAL_STATE = '';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TEXT:
      return action.payload;
    default:
      return state;
  }
};