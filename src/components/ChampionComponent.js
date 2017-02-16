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
          data={ championdata }
        />);
      })
    }

    return (
        <div>
          {mapToComponents(mockData)}
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
