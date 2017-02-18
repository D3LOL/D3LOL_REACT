
import React from 'react';

import { connect } from 'react-redux';
import { axiosGet } from '../actions';
import eg from 'egjs';
import $ from 'jquery';


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

	componentDidMount() {
		
	}


  render() {

    const mapToComponents = data => {
      return data.map((championdata, i) => {
        console.log(championdata);
        return (<UserList
        	key={i}
          data={ championdata }
        />);
      })
    }

    return (
    	<div>
     		<div className="logo">
    			<img role='presentation' src="./img/logo.png"/>
  			</div>

        <input className="search-input" ref={textRef => this.textInput = textRef} type="text" placeholder="유저 닉네임...유저 닉네임...유저 닉네임...유저 닉네임...검색..." />
        <button onClick={this.handleClick.bind(this)}>Click</button>
        <div className='userList'>
        	{mapToComponents(this.props.user)}
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


function dispatchTo(dispatch) {
  return {
    searchUser: (query) => dispatch(axiosGet(query))
  }
}


SearchComponent.displayName = 'SearchComponent';
export default connect(mapStateToProps, dispatchTo)(SearchComponent);



