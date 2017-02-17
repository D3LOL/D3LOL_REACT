import React from 'react';

class ChampionSpell extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <img src={"http://ddragon.leagueoflegends.com/cdn/7.3.3/img/spell/" + this.props.spelldata.image.full} />
        <p>{this.props.spelldata.name}</p>
      </div>
    );
  }

}

export default ChampionSpell
