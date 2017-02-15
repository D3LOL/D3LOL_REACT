import { combineReducers } from 'redux';

var initState = {
  data: 1,
  value: 2
}

function test (state = initState, action)  {

  switch(action.type) {
    case "one":
      return Object.assign({}, state, {
        data: action.val + 1,
        value: state.value + 1
      });
    default:
      return state
  }
}

const reducers = combineReducers({
  test
});

export default reducers;
