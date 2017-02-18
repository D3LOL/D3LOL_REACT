import React from 'react';
import { Popover, OverlayTrigger, Table } from 'react-bootstrap';
import marked from 'marked';

class ChampionSpell extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const passivePopover = (
      <Popover title={this.props.passive.name}>
        <p dangerouslySetInnerHTML={{__html: this.props.passive.description}}></p>
      </Popover>
    );

    const alignCenter = {
      textAlign: "center"
    }

    const mapToSpells = data => {
      return data.map((spelldata, i) => {

        //SPELL POPOVER
        const spellPopover = (
          <Popover title={spelldata.name}>
            <p>{spelldata.description}</p>
            <p>{"재사용시간: " + spelldata.cooldownBurn}</p>
            <p>{"소모: " + spelldata.costBurn + " " + spelldata.costType}</p>
            <p>{"범위: " + spelldata.rangeBurn}</p>
            <p dangerouslySetInnerHTML={{__html: spelldata.tooltip}}></p>
          </Popover>
        );

        return (
          <td>
            <OverlayTrigger overlay={spellPopover}>
              <img src={"http://ddragon.leagueoflegends.com/cdn/7.3.3/img/spell/" + spelldata.image.full} />
            </OverlayTrigger>
            <p className="champion-index-name">{spelldata.name}</p>
          </td>
        );
      })
    }

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th style={alignCenter}>Passive</th>
              <th colSpan="4" style={alignCenter}>Spells</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <OverlayTrigger overlay={passivePopover}>
                  <img src={"http://ddragon.leagueoflegends.com/cdn/7.3.3/img/passive/"+ this.props.passive.image.full }/>
                </OverlayTrigger>
                <p className="champion-index-name">{this.props.passive.name}</p>
              </td>
              { mapToSpells(this.props.skills)}
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }

}

export default ChampionSpell;
