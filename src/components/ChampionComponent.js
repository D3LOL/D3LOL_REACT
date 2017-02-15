'use strict';

import React from 'react';
import { connect } from 'react-redux';
import action from '../actions.js';

class ChampionComponent extends React.Component {
  render() {
    return (
      <div className="jumbotron text-center">
				<h1>Champion Component</h1>
        <h2>{ this.props.character }</h2>
        <button onClick={ this.props.addOne }>Submit</button>
			</div>
    );
  }
}

function championFunc (state) {
  return {
    character: state.test.data
  }
}

function addOne() {
  return {
    plusOne: (dispatch) => (
      dispatch(action.onePlus(this.props.character))
    )  
  }
}

// Uncomment properties you need
// ChampionComponent.propTypes = {};
// ChampionComponent.defaultProps = {};

export default connect(championFunc, addOne)(ChampionComponent);
