import React from 'react';
// import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute, IndexRedirect, Redirect } from 'react-router';
import Header from './Header';
import Login from './login/login.js'

import SearchComponent from './components/SearchComponent';
import RankComponent from './components/RankComponent';
import ChampionComponent from './components/ChampionComponent';
import MultiSearchComponent from './components/MultiSearchComponent';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import reducers from './reducers.js';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import './index.css'



// const loggerMiddleware = createLogger()

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(
//   applyMiddleware(
//   thunkMiddleware, loggerMiddleware, promiseMiddleware
//   )
// ));

// console.log(store.getState())


const notFound = (props) => (
      <div>
      "NotFound"
      </div>
)



class App extends React.Component {


  render(){
    return (
      <Provider store={this.props.store}>
           <Router history={browserHistory}>
             <Route path='/' component={Header}>
              <IndexRedirect to='search' />
              <Route path='search' component={SearchComponent} />
              <Route path='rank' component={RankComponent} />
              <Route path='champion' component={ChampionComponent} />
              <Route path='multiSearch' component={MultiSearchComponent} />
              <Route path='notFound' component={notFound} />
              <Redirect from='*' to='notFound' />
             </Route> 
           </Router>
         </Provider>
      )
  }

}

var stateTo = function(state){
  return {
    auth : state.Auth.auth
  }
}







export default connect(stateTo)(App)

