import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';

import firebase from './firebase';
import store from './store';
import router from './router';
import {startAddTodos, login, logout} from './actions';


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startAddTodos());
    hashHistory.push('/todos');
  } else {
    store.dispatch(logout());
    hashHistory.push('/');
  }
});

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('root')
);
