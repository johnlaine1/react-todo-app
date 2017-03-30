export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_COMPLETE_TODO = 'TOGGLE_COMPLETE_TODO';
export const TOGGLE_SHOW_COMPLETED_TODOS = 'TOGGLE_SHOW_COMPLETED_TODOS';

export const updateSearchText = (text) => {
  return {
    type: UPDATE_SEARCH_TEXT,
    payload: text
  };
};

export const createTodo = (todo) => {
  return {
    type: CREATE_TODO,
    payload: todo
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const toggleCompleteTodo = (id) => {
  return {
    type: TOGGLE_COMPLETE_TODO,
    payload: id
  };
};

export const toggleShowCompletedTodos = () => {
  return {
    type: TOGGLE_SHOW_COMPLETED_TODOS
  };
};
