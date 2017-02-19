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
import DevTools from './DevTools.js'




const rootElement = document.getElementById('root');


const loggerMiddleware = createLogger()

const store = createStore(reducers, compose(
  applyMiddleware(
  thunkMiddleware, loggerMiddleware, promiseMiddleware
  ), DevTools.instrument()
));

console.log(store.getState())



ReactDOM.render(
   <Provider store={store}><div><App store={store}/><DevTools /></div></Provider>, rootElement
);

