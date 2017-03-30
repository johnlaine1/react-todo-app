import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, compose} from 'redux';
import reducers from './reducers';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = createStore(reducers, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

