import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';

import firebase from './firebase';
import store from './store';
import router from './router';
import {startAddTodos, login, logout} from './actions';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    hashHistory.push('/todos');
  } else {
    store.dispatch(logout());
    hashHistory.push('/');
  }
});

store.dispatch(startAddTodos());

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('root')
);
