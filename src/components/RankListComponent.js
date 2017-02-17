import React from 'react';

import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('../styles/RankList.css');

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});


const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
    selected: true,
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
    selected: true,
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];


class RankListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
    };
  }


  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };


  render() {
    return (
    	
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="6" tooltip="Champion Ranking" style={{textAlign: 'center', fontSize: '40px'}}>
                챔피언 장인 랭킹
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
            	<TableHeaderColumn tooltip="Rank">Rank</TableHeaderColumn>
              <TableHeaderColumn tooltip="UserName">User Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="LP Point">LP Point</TableHeaderColumn>
              <TableHeaderColumn tooltip="Win">Win</TableHeaderColumn>
              <TableHeaderColumn tooltip="Lost">Lost</TableHeaderColumn>
              <TableHeaderColumn tooltip="Winning Rate">Winning Rate</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.props.data.map( (ranker, index) => (
              <TableRow key={index} selected={ranker.selected}>
              	<TableRowColumn>{index+1}</TableRowColumn>
                <TableRowColumn>{ranker.playerOrTeamName}</TableRowColumn>
                <TableRowColumn>{ranker.leaguePoints}</TableRowColumn>
                <TableRowColumn>{ranker.wins}</TableRowColumn>
                <TableRowColumn>{ranker.losses}</TableRowColumn>
                <TableRowColumn>{Math.round(ranker.wins / (ranker.losses + ranker.wins)*100)}%</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      </MuiThemeProvider>
			
    );
  }
}

RankListComponent.displayName = 'RankListComponent';

// Uncomment properties you need
// RankListComponent.propTypes = {};
// RankListComponent.defaultProps = {};

export default RankListComponent;
