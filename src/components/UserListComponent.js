import React from 'react';


require('../styles/UserList.css');

class UserListComponent extends React.Component {
  render() {
  	

    return (
      <div className="userContainer">
      	<div claasName="userStack">
      		<img src={`http://ddragon.leagueoflegends.com/cdn/7.3.3/img/profileicon/${this.props.data.profileIconId}.png`} />
      	</div>
				<div className="userStack">
					<p> USERNAME </p>
					{/*<p ref={idRef => this.userid = idRef}>공백</p>*/}
					<p>{ this.props.data.name }</p>
				</div>
				<div className="userStack">
					<p> LEVEL </p>
					<p>{ this.props.data.summonerLevel }</p>
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
