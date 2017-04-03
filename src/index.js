import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {setTodos, getTodos} from './api/TodoAPI';
import {startAddTodos} from './actions';
import rootReducer from './reducers';
import App from './components/App';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.dispatch(startAddTodos());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Login}/>
        <Route path="/todos" component={App}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
