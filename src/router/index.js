import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from '../components/App';
import Login from '../components/Login';
import firebase from '../firebase';


const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  } 
  next();
};

const redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};

export const routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
        <Route path="todos" component={App} onEnter={requireLogin}/>
      </Route>
    </Router>
  );
};

