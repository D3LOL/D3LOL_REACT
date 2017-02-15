import { combineReducers } from 'redux';

var initState = {
  data: 1,
  value: null
}

function test (state = initState, action)  {
  switch(action.type) {
    case "one":
      return Object.assign({}, state, {
        value: action.value + 2
      });
    default:
      return state
  }
}

const reducers = combineReducers({
  test
});

export default reducers;
