'use strict';

import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <div className="jumbotron text-center">
				<h1>NOT FOUND!!!!!</h1>
			</div>
    );
  }
}

NotFound.displayName = 'NotFound';

// Uncomment properties you need
// MultiSearchComponent.propTypes = {};
// MultiSearchComponent.defaultProps = {};

export default NotFound;
