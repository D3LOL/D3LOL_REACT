import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Provider, connect } from 'react-redux';
import reducers from './reducers.js';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware, compose } from 'redux';
import $ from 'jquery';





const rootElement = document.getElementById('root');


const loggerMiddleware = createLogger()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(
  thunkMiddleware, loggerMiddleware, promiseMiddleware
  )
));

console.log(store.getState())



ReactDOM.render(
   <Provider store={store}><App store={store}/></Provider>, rootElement
);

