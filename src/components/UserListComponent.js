'use strict';

import React from 'react';
import { axiosGet } from '../actions';
import { connect } from 'react-redux';

require('../styles/UserList.css');

class UserListComponent extends React.Component {
  render() {
    return (
      <div className="userContainer">
				<div className="userStack">
					<p> USERNAME </p>
					<p ref={idRef => this.userid = idRef}>{this.props.user.name}</p>
				</div>
				<div className="userStack">
					<p> LEVEL </p>
					<p> {this.props.user.summonerLevel} </p>
				</div>
			</div>
    );
  }
}

function mapStateToProps(state) {
		return {
				user: state.searchuser.data
		}
}



UserListComponent.displayName = 'UserListComponent';

// Uncomment properties you need
// UserListComponent.propTypes = {};
// UserListComponent.defaultProps = {};

export default connect(mapStateToProps)(UserListComponent);
