import firebase, {firebaseRef, githubProvider} from '../firebase';
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

export const startAddTodos = () => {
  return (dispatch, getState) => {
    const todosRef = firebaseRef.child('todos');
    
    todosRef.once('value').then((snapshot) => {
      let todos = [];
      const todosObj = snapshot.val() || {};
      
      Object.keys(todosObj).forEach((id) => {
        todos.push({id, ...todosObj[id]});
      });

      dispatch(createTodos(todos));
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
    
    todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};

export const startLogin = () => {
  return (dispath, getState) => {
    firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('Auth success', result);
    }, (error) => {
      console.log('Auth error', error);
    });
  };
};

export const startLogout = () => {
  return (dispath, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged out');
    });
  };
};

