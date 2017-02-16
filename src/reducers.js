import { combineReducers } from 'redux';
import './actions'
const ONE_PLUS = "one";
const REQUEST_USER = "request_user";
const RECEIVE_USER = "receive_user";
const FAILGET_USER = "failget_user"
var initState = {
  data: 1,
  value: 2
}

function test (state = initState, action)  {

  switch(action.type) {
    case "one":
      return Object.assign({}, state, {
        data: state.data + 1,
        value: state.value + 1
      });
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
          data: action.data
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
  test,
  searchuser
});

export default reducers;
