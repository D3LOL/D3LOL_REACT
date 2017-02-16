'use strict';

import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { axiosGet } from '../actions';

import UserList from './UserListComponent';


require('../styles/Search.css');

class SearchComponent extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}


	handleClick(){
		this.props.searchUser(this.textInput.value);

	}

  render() {

    return (
    	<div>
     		 <div className="logo">
				<img src="./img/logo.png"/>
			</div>	
				<input ref={textRef => this.textInput = textRef} type="text" placeholder="유저 닉네임...유저 닉네임...유저 닉네임...유저 닉네임...검색..." />
				<button onClick={this.handleClick.bind(this)}>Click</button>

				<UserList/>

    );
  }
}



function dispatchTo(dispatch) {
  return {
    searchUser: (query) => dispatch(axiosGet(query))
  }
}
	

SearchComponent.displayName = 'SearchComponent';
export default connect(undefined, dispatchTo)(SearchComponent);




