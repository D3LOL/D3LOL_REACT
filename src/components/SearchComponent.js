
import React from 'react';

import { connect } from 'react-redux';
import { axiosGet } from '../actions';
import eg from 'egjs';
import $ from 'jquery';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import { Modal, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';


import UserList from './UserListComponent';


require('../styles/Search.css');

class SearchComponent extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.randomClick = this.randomClick.bind(this);
		this.state = {
			active: 0
		}
	}

	handleClick(){
		this.props.searchUser(this.textInput.value);

	}

	componentWillUnmount() {
			this.props.searchUser();
	}

	randomClick() {
    var num = Math.floor((Math.random() * this.props.user.length) + 1);
    console.log(num);
    
    
    this.setState({
      active: num
    });
	  
  }

  render() {

  	var mockupData = [
  		{name: 'siwoo', id:1, summonerLevel:10},
  		{name: 'siwoo', id:1, summonerLevel:10},
  		{name: 'siwoo', id:1, summonerLevel:10},
  		{name: 'siwoo', id:1, summonerLevel:10},
  		{name: 'siwoo', id:1, summonerLevel:10},
  		{name: 'siwoo', id:1, summonerLevel:10}
  	]

    const mapToComponents = data => {
      return data.map((championdata, i) => {
        console.log(championdata);
        return (<UserList
        	key={i}
          data={ championdata }
        />);
      })
    }

    const mapToCoverflow = data => {
      return data.map((imgsrc, i) => {
      	const userTooltip = (
		    	<Tooltip id='tooltip'>
		        	최근 업데이트 { new Date(imgsrc.revisionDate).toLocaleString() }
		       </Tooltip>
		    )
        return (
        	<OverlayTrigger placement='top' overlay={userTooltip} data-action={`https://www.op.gg/summoner/userName=${imgsrc.name}`}
        	alt={`${imgsrc.name} LEVEL ${imgsrc.summonerLevel}`}>
        	<img
          src={`http://ddragon.leagueoflegends.com/cdn/7.3.3/img/profileicon/${imgsrc.profileIconId}.png`}
        	/>
					</OverlayTrigger>
        );
      })
    }

    const tooltip = (
    	<Tooltip className='in' id='tooltip'>
        	랜덤유저 선택
       </Tooltip>
    )
    

    



    return (
    	<div>
        <a href="/auth/facebook" class="btn btn-primary"><span class="fa fa-facebook"></span> Facebook</a>
        <a href="/test" class="btn btn-primary"><span class="fa fa-facebook"></span> test</a>
        <a href="/logout" class="btn btn-primary"><span class="fa fa-facebook"></span> test</a>

     		<div className="logo">
    			<img role='presentation' src="./img/logo.png"/>
  			</div>

        <input ref={textRef => this.textInput = textRef} type="text" placeholder="유저 닉네임...유저 닉네임...유저 닉네임...유저 닉네임...검색..." />
        <button onClick={this.handleClick}>Click</button>

        <StyleRoot style={{marginTop:"50px"}}>
	        <OverlayTrigger placement='top' overlay={tooltip}>
	        	<Button bsStyle='default' onClick={this.randomClick}>Random</Button>
	        </OverlayTrigger>
        	
        	<Coverflow
        		  displayQuantityOfSide={2}
              navigation={true}
              enableHeading={true}
              media={{
                '@media (max-width: 900px)': {
                  width: '600px',
                  height: '300px'
                },
                '@media (min-width: 900px)': {
                  width: '960px',
                  height: '400px'
                }
              }}
              active={this.state.active}
        	>
        	
        		{mapToCoverflow(this.props.user)}
        	

        	</Coverflow>

        </StyleRoot>
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



