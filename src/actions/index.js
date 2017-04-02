import firebase, {firebaseRef} from '../firebase';
import moment from 'moment';

export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
export const CREATE_TODO = 'CREATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TOGGLE_SHOW_COMPLETED_TODOS = 'TOGGLE_SHOW_COMPLETED_TODOS';
export const CREATE_TODOS = 'CREATE_TODOS';
export const START_ADD_TODO = 'START_ADD_TODO';

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

export const startAddTodo = (text) => {
  return (dispatch, getState) => {
    const todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    const todoRef = firebaseRef.child('todos').push(todo);
    
    todoRef.then(() => {
      dispatch(createTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const updateTodo = (id, updates) => {
  return {
    type: UPDATE_TODO,
    id,
    updates
  };
};

export const toggleShowCompletedTodos = () => {
  return {
    type: TOGGLE_SHOW_COMPLETED_TODOS
  };
};

export const createTodos = (todos) => {
  return {
    type: CREATE_TODOS,
    payload: todos
  };
};

export const startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    const todoRef = firebaseRef.child(`todos/${id}`);
    const updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };
    
    todoRef.update(updates);
    
    todoRef.then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};