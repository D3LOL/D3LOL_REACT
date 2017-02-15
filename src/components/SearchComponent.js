'use strict';

import React from 'react';
import axios from 'axios';
import searchUser from '../lib/searchUser';

require('../styles/Search.css');

class SearchComponent extends React.Component {
  render() {

    return (
    	<div>
      <div className="logo">
				<img src="./img/logo.png"/>
			</div>

			<form>
				<input type="text" placeholder="유저 닉네임...유저 닉네임...유저 닉네임...유저 닉네임...검색..." />
			</form>

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
			</div>
    );
  }
}

SearchComponent.displayName = 'SearchComponent';

// Uncomment properties you need
// SearchComponent.propTypes = {};
// SearchComponent.defaultProps = {};

export default SearchComponent;
