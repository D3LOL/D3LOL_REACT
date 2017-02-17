
import React from 'react';
import { connect } from 'react-redux';
import Champion from './Champion.js';
import $ from 'jquery'


class ChampionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    $.get('/api/champion').done(data => {
      this.setState(
        { data: data }
      )
    })
  }

  render() {
 
    const mapToComponents = data => {
      return data.map((championdata, i) => {
        return (<Champion
          data={ championdata }
        />);
      })
    }

    return (
        <div>
          { mapToComponents(this.state.data) }
        </div>
    );
  }
}

// Uncomment properties you need
// ChampionComponent.propTypes = {};
// ChampionComponent.defaultProps = {};

export default connect()(ChampionComponent);
