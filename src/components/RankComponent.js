
import React from 'react';
import RankList from './RankListComponent';
import $ from 'jquery';
import eg from 'egjs';

import { connect } from 'react-redux';
import { getChamp } from '../actions';

require('../styles/Rank.css');

class RankComponent extends React.Component {
	constructor(props) {
		super(props);
		
	}

	
	componentDidMount() {
    
	}

  render() {
  	

    const mapToComponents = rankdata => {
    	rankdata.sort((a, b) => b.leaguePoints - a.leaguePoints);
      return (
        <RankList
          data={ rankdata }
        />
      )
    }
    

    return (
    	<div>
      <div className="jumbotron text-center">
				<h1>Rank</h1>


			</div>
			<div>
				여긴뭐다?
			</div>
			<button onClick={()=>this.props.getRanklist()}>Click</button>
			<div className="rankContainer">
	    	{mapToComponents(this.props.rank)}	
			</div>

			</div>
    );
  }
}

function mapStateToProps(state) {
		return {
				rank: state.getRank.data
		}
}


function mapDispatchToProps(dispatch) {
  return {
    getRanklist: () => dispatch(getChamp())
  }
}

RankComponent.displayName = 'RankComponent';

// Uncomment properties you need
// RankComponent.propTypes = {};
// RankComponent.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RankComponent);
