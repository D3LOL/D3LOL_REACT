

import React from 'react';
import { connect } from 'react-redux';
import { testpass } from '../actions';

const Testauth = (props) => (
      <button onClick={props.changeauth}>
      "ChangeAuth"
      </button>
)

function dispatchTo(dispatch) {
  return {
    changeauth: () => dispatch(testpass())
  }
}

export default connect(undefined, dispatchTo)(Testauth)