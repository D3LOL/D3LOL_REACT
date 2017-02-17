import { combineReducers } from 'redux';
import './actions'
const REQUEST_USER = "request_user";
const RECEIVE_USER = "receive_user";
const FAILGET_USER = "failget_user";


var authState = {
  auth: true,
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
  data: [{
        id:0,
        name: 'DEFAULT',
        summonerLevel: 0,
        profileIconId: 0,
        revisionDate: 0
    }]
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
          data: Object.keys(action.data).map(function(user){ return action.data[user]})
        })
    case FAILGET_USER:
      return  Object.assign({}, state, {
           status: action.status
        })
    default:
      return state
  }
}

var rankState = { 
  status: '',
  data: [ {playerOrTeamName: 'HEY', leaguePoints: 0, wins:0, losses:0 }]
}

function getRank (state = rankState, action) {
    switch(action.type) {
        case REQUEST_USER:
          return Object.assign({}, state, {
              status: action.status
          })

        case 'RECEIVE_CHAMP':
          return Object.assign({}, state, {
              status: action.status,
              data: action.data.entries
          })

        case FAILGET_USER:
          return Object.assign({}, state, {
              status: action.status
          })
        
        default:
          return state  
    }
}

const reducers = combineReducers({
  Auth,
  searchuser,
  getRank
});

export default reducers;
