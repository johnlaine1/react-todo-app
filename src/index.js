import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import firebase from './firebase';
import {routes} from './router';
import {setTodos, getTodos} from './api/TodoAPI';
import {startAddTodos} from './actions';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.dispatch(startAddTodos());



ReactDOM.render(
  <Provider store={store}>
    {routes()}
  </Provider>,
  document.getElementById('root')
);
