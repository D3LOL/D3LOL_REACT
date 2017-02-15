'use strict';

import React from 'react';

require('../styles/Rank.css');

class RankComponent extends React.Component {
  render() {
    return (
      <div className="jumbotron text-center">
				<h1>Rank</h1>

				<div className="rankContainer" >
					

				</div>
			</div>
    );
  }
}

RankComponent.displayName = 'RankComponent';

// Uncomment properties you need
// RankComponent.propTypes = {};
// RankComponent.defaultProps = {};

export default RankComponent;
