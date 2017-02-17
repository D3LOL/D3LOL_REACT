import React from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';

class ChampionSpell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      spellName: this.props.spelldata.name,
      spellDesc: this.props.spelldata.description,
      spellTooltip: this.props.spelldata.tooltip,
      costType: this.props.spelldata.costType,
      costBurn: this.props.spelldata.costBurn,
      range: this.props.spelldata.rangeBurn
    }
  }

  render() {

    const popover = (
      <Popover id="modal-popover" title={this.state.spellName}>
        <p>{this.state.spellDesc}</p>
        <p>소모: {this.state.costType + ' ' + this.state.costBurn}</p>
        <p>범위: {this.state.range}</p>
        <p>{this.state.spellTooltip}</p>
      </Popover>
    );

    return (
      <div className='col-xs-3'>
        <OverlayTrigger overlay={popover}>
          <img src={"http://ddragon.leagueoflegends.com/cdn/7.3.3/img/spell/" + this.props.spelldata.image.full} />
        </OverlayTrigger>
        <p>{this.props.spelldata.name}</p>
      </div>
    );
  }

}

export default ChampionSpell;
