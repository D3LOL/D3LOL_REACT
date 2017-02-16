'use strict';

import React from 'react';

require('../styles/UserList.css');

class UserListComponent extends React.Component {
  render() {
    return (
      <div className="userContainer">
				<div className="userStack">
					<p> stack.playerOrTeamName </p>
					<p> stack.leaguePoints </p>
				</div>
				<div className="userStack">
					<p> stack.wins </p>
					<p> stack.losses </p>
				</div>
				<div className="userStack">
					 stack.division 
				</div>
			</div>
    );
  }
}

UserListComponent.displayName = 'UserListComponent';

// Uncomment properties you need
// UserListComponent.propTypes = {};
// UserListComponent.defaultProps = {};

export default UserListComponent;
