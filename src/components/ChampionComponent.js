'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { onePlus } from '../actions';
import Champion from './Champion.js';


class ChampionComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var mockData = [{name: 123},{name: 456},{name: 78}]

    const mapToComponents = data => {
      return data.map((championdata, i) => {
        console.log(championdata);
        return (<Champion
          data={championdata}
        />);
      })
    }

    return (
      <div className="jumbotron text-center">
				<h1>Champion Component</h1>
        <h2>{ this.props.character }</h2>
        <h3>{ this.props.character2 }</h3>
        <button onClick={ this.props.plusOne }>Submit</button>
        <div>{mapToComponents(mockData)}</div>
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
    plusOne: () => dispatch(onePlus())
  }
}

// Uncomment properties you need
// ChampionComponent.propTypes = {};
// ChampionComponent.defaultProps = {};

export default connect(championFunc, addOne)(ChampionComponent);
