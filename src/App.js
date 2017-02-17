import React from 'react';
// import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute, IndexRedirect, Redirect } from 'react-router';
import Header from './Header';
import Login from './login/login.js'
import Testauth from './components/TEST'
import SearchComponent from './components/SearchComponent';
import RankComponent from './components/RankComponent';
import ChampionComponent from './components/ChampionComponent';
import MultiSearchComponent from './components/MultiSearchComponent';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers.js';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import './index.css'



const loggerMiddleware = createLogger()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(
  thunkMiddleware, loggerMiddleware, promiseMiddleware
  )
));

console.log(store.getState())

const Temp = (props) => (
      <div>
      {console.log(store.getState().Auth.auth)}
      {props.children}
      <Testauth />
      </div>
)

const notFound = (props) => (
      <div>
      "NotFound"
      </div>
)



class App extends React.Component {
  render(){
    return (
         <Provider store={store}>
           <Router history={hashHistory}>
             <Route path='/' component={Temp}>
               <IndexRedirect to="/login" />

               <Route path={!store.getState().Auth.auth ? '/login' : ''} component={Login} />
               <Route path={store.getState().Auth.auth ? '/main' : '/login'} component={Header} >
                   <Route path={store.getState().Auth.auth ? '/search' : '/login'} component={SearchComponent} />
                   <Route path={store.getState().Auth.auth ? '/rank' : '/login'} component={RankComponent} />
                   <Route path={store.getState().Auth.auth ? '/champion' : '/login'} component={ChampionComponent} />
                   <Route path={store.getState().Auth.auth ? '/multiSearch' : '/login'} component={MultiSearchComponent} />
               </Route>
             </Route>
                <Route path={'/notFound'} component={notFound} />
                <Redirect from={store.getState().Auth.auth ? '/login' : ''} to={'/main'} />
                <Redirect from='*' to={'/notFound'} />
           </Router>
         </Provider>
      )
  }

}







export default App;

