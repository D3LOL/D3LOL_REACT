'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { onePlus } from '../actions';

class ChampionComponent extends React.Component {
  render() {
    return (
      <div className="jumbotron text-center">
				<h1>Champion Component</h1>
        <h2>{ this.props.character }</h2>
        <h3>{ this.props.character2 }</h3>
        <button onClick={ this.props.plusOne }>Submit</button>
			</div>
    );
  }
}

function championFunc (state) {
  return {
    character: state.test.data,
    character2: state.test.value
  }
}

function addOne(dispatch) {

  return {
    plusOne: () => dispatch(onePlus(100))
  }
}

// Uncomment properties you need
// ChampionComponent.propTypes = {};
// ChampionComponent.defaultProps = {};

export default connect(championFunc, addOne)(ChampionComponent);
