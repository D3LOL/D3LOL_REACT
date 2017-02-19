import React from 'react';
// import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute, IndexRedirect, Redirect } from 'react-router';
import Header from './Header';
import Login from './login/login.js'

import SearchComponent from './components/SearchComponent';
import Chat from './components/Chat';
import RankComponent from './components/RankComponent';
import ChampionComponent from './components/ChampionComponent';
import MultiSearchComponent from './components/MultiSearchComponent';
// import logInComponent from './components/LogInComponent';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import reducers from './reducers.js';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import './index.css'
import axios from 'axios'



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
              <Route path='rank' component={RankComponent} onEnter={checkAuth}/>
              <Route path='champion' component={ChampionComponent} />
              <Route path='multiSearch' component={MultiSearchComponent} />
              <Route path='Chat' component={Chat} />
              <Route path='notFound' component={notFound} />
              <Redirect from='*' to='notFound' />
             </Route> 

           </Router>
         </Provider>
      )
  }

}
    // <Route path='chat' component={Chat} />
var stateTo = function(state){
  return {
    auth : state.Auth.auth
  }
}

function checkAuth(nextState, replace, callback){
  // console.log('checkAuth Args::', nextState, replace, callback)
  // callback delays this function to be async
  axios.get('/checkAuth')
    .then(response => {
      console.log('checkAuth:: ', response)
      if(response.data === "OK"){
        callback();
      } else {
        replace({pathname:'/multisearch'})
        callback()
      }
    })
    .catch(err => {
      callback(err);
    })
}






export default connect(stateTo)(App)

