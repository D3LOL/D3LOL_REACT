import { combineReducers } from 'redux';
import './actions'
const ONE_PLUS = "one";
const REQUEST_USER = "request_user";
const RECEIVE_USER = "receive_user";
const FAILGET_USER = "failget_user";


var authState = {
  auth: false,
  token: null
}

function Auth (state = authState, action) {

  switch(action.type) {
    case "PASS":
      return Object.assign({}, state, {
        auth: true,
        token: action.token
      })
    case "NOTPASS":
      return Object.assign({}, state, {
        auth: false
      })
    case "TESTPASS":
      return Object.assign({}, state, {
        auth: !state.auth
      })
    default: 
      return state
  }

}

var searchState = {
  status: "", 
  data: ""
}

function searchuser (state = searchState, action) {
  switch(action.type) {
    case REQUEST_USER:
      return Object.assign({}, state, {
          status: action.status
        })
      
    case RECEIVE_USER:
      return Object.assign({}, state, {
          status: action.status,
          data: action.data[Object.keys(action.data)[0]]
        })
    case FAILGET_USER:
      return  Object.assign({}, state, {
           status: action.status,
          data: "haha"
        })
    default:
      return state
  }
}

const reducers = combineReducers({
  Auth,
  searchuser
});

export default reducers;
