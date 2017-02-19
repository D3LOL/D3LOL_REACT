
import React from 'react';
import { connect } from 'react-redux';
import Champion from './Champion.js';
import $ from 'jquery';
import { StyleRoot } from 'radium';
import Coverflow from 'react-coverflow';
import { Table } from 'react-bootstrap';


class ChampionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filter: ''
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    $.get('/api/champion').done(data => {
      this.setState(
        { data: data }
      )
    })
  }

  handleFilterChange(event) {
    this.setState({
      filter: event.target.value
    })
  }

  render() {

    const marginTop = {
      marginTop: "30px"
    }

    const alignLeft = {
      textAlign: "left"
    }

    const marginLeft = {
      marginLeft: "5px"
    }

 
    const mapToComponents = data => {
      console.log(this.state.filter);
      if (this.state.filter.length === 0) {
        return data.map((championdata, i) => {
          return (<Champion
            data={ championdata }
          />);
        })
      } else {
        var filteredArr = [];
        for(let i=0; i < data.length; i++) {
          if(data[i].tags[0] === this.state.filter || data[i].tags[1] === this.state.filter) {
            filteredArr.push(data[i]);
          }
        }
        return filteredArr.map((championdata, i) => {
          return (<Champion
            data={ championdata }
          />);
        })
      } 
    }

    const mapToCoverflow = data => {
      return data.map((imgsrc, i) => {
        return (
          <img src={"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + imgsrc.key + "_0.jpg"} alt={imgsrc.name} />
        );
      })
    }

    const championFilterBox = (
      <div className="champion-filter-outer-container">
        <div className="champion-filter-first-inner-container">
          <div className="champion-filter-second-inner-container">
            <div className="champion-filter-container">
              <h3 style={alignLeft}>Champions Filters</h3>
              <div>
                <Table>
                  <tbody>
                    <tr>
                      <td>
                        <p>Roles</p>
                      </td>
                      <td>
                        <label>
                          <input 
                            type="radio"
                            value="" 
                            checked={this.state.filter === ''}
                            onChange={this.handleFilterChange}/>
                          전체  
                        </label>
                      </td>
                      <td>
                        <label>
                          <input 
                            type="radio" 
                            value="Assassin" 
                            checked={this.state.filter === 'Assassin'}
                            onChange={this.handleFilterChange}/>
                          Assassin
                        </label>
                      </td>
                      <td>
                        <label>
                          <input 
                            type="radio" 
                            value="Fighter" 
                            checked={this.state.filter === "Fighter"}
                            onChange={this.handleFilterChange}/>
                          Fighter
                        </label>
                      </td>
                      <td>
                        <label>
                          <input 
                            type="radio" 
                            value="Mage" 
                            checked={this.state.filter === "Mage"}
                            onChange={this.handleFilterChange}/>
                          Mage
                        </label>
                      </td>
                      <td>
                        <label>
                          <input 
                            type="radio" 
                            value="Support" 
                            checked={this.state.filter === "Support"}
                            onChange={this.handleFilterChange}/>
                          Support
                        </label>
                      </td>
                      <td>
                        <label>
                          <input 
                            type="radio" 
                            value="Tank" 
                            checked={this.state.filter === "Tank"}
                            onChange={this.handleFilterChange}/>
                          Tank
                        </label>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return (
        <div>
          <StyleRoot>
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
                  height: '600px'
                }
              }}
            >
              { mapToCoverflow(this.state.data) }
            </Coverflow>
          </StyleRoot>
          { championFilterBox }
          <div style={marginTop}>
            { mapToComponents(this.state.data) }
          </div>
        </div>
    );
  }
}

// Uncomment properties you need
// ChampionComponent.propTypes = {};
// ChampionComponent.defaultProps = {};

export default connect()(ChampionComponent);

