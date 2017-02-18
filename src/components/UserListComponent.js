import React from 'react';
import { OverlayTrigger, Tooltip, Button, Modal, Popover } from 'react-bootstrap';
import $ from 'jquery';
import eg from 'egjs';


require('../styles/UserList.css');

class UserListComponent extends React.Component {
	componentDidMount() {
		// $("#flickingtest").flicking({
		//   duration: 300,
		//   circular: true,
		//   defaultIndex: 1
		// });

		// // new eg.Flicking("#flickingtest", {
		// //   duration: 300,
		// //   circular: true,
		// //   defaultIndex: 1
		// // });

	}	

  render() {
  	const tooltip = (
    	<Tooltip id='tooltip'>
        	랜덤유저 선택
       </Tooltip>
    )

    return (
    	
    	
			<div className="col-md-3 userList">
      		
      		<img src={`http://ddragon.leagueoflegends.com/cdn/7.3.3/img/profileicon/${this.props.data.profileIconId}.png`} />

      		<div>{ this.props.data.name }</div>
        	<div>{ this.props.data.summonerLevel }</div>
        	<div>ID { this.props.data.id }</div>
        	<div>최근 업데이트 { new Date(this.props.data.revisionDate).toLocaleString() }</div>
				
			</div>
			
			
    );
  }
}



UserListComponent.displayName = 'UserListComponent';

// Uncomment properties you need
// UserListComponent.propTypes = {};
// UserListComponent.defaultProps = {};

export default UserListComponent;
