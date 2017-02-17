
import React from 'react';

require('../styles/RankList.css');

class RankListComponent extends React.Component {
  render() {
    return (
      <div className="userContainer">
				<div className="userStack">
					<p> USERNAME </p>
					<p>{ this.props.data.playerOrTeamName }</p>
				</div>
				<div className="userStack">
					<p> LP Point </p>
					<p>{ this.props.data.leaguePoints }</p>
				</div>
				<div className="userStack">
					<p> Win </p>
					<p>{ this.props.data.wins }</p>
				</div>
				<div className="userStack">
					<p> Lost </p>
					<p>{ this.props.data.losses }</p>
				</div>
				<div className="userStack">
					<p> 승률 </p>
					<p>{ Math.round(this.props.data.wins / (this.props.data.losses + this.props.data.wins)*100) }%</p>
				</div>
			</div>
    );
  }
}

RankListComponent.displayName = 'RankListComponent';

// Uncomment properties you need
// RankListComponent.propTypes = {};
// RankListComponent.defaultProps = {};

export default RankListComponent;
