import {TOGGLE_SHOW_COMPLETED_TODOS} from '../actions';

const INITIAL_STATE = false;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_COMPLETED_TODOS:
      return !state;
    default:
      return state;
  }
};