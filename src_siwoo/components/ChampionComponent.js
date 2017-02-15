'use strict';

import React from 'react';

require('../styles/Champion.css');

class ChampionComponent extends React.Component {
  render() {
    return (
      <div className="jumbotron text-center">
				<h1>해주세요</h1>
			</div>
    );
  }
}

ChampionComponent.displayName = 'ChampionComponent';

// Uncomment properties you need
// ChampionComponent.propTypes = {};
// ChampionComponent.defaultProps = {};

export default ChampionComponent;
