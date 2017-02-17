import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { createStore, applyMiddleware, compose } from 'redux';
const loggerMiddleware = createLogger()
import reducers from './reducers.js';
import promiseMiddleware from 'redux-promise';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(
  thunkMiddleware, loggerMiddleware, promiseMiddleware
  )
));
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger';
const rootElement = document.getElementById('root');
      {console.log(store.getState().Auth.auth)}



ReactDOM.render(
 <App store={store}/>, rootElement
);

