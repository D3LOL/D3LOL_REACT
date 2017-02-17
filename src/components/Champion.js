
import React from 'react';
import { Button, Modal, Popover } from 'react-bootstrap';
import ChampionSpell from './ChampionSpell.js'

class Champion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this); 
  }

  close(){
    this.setState({ showModal: false })
  }

  open(){
    this.setState({ showModal: true }) 
  }

  render() {

    const mapToSpells = data => {
      return data.map((spelldata, i) => {
        return (<ChampionSpell
          spelldata={ spelldata }
        />);
      })
    }

    return (
      <div className="col-md-4">
        <img src={"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+ this.props.data.key +"_0.jpg"} />
        <div>{ this.props.data.name }</div>
        <div>{ this.props.data.key }</div>
        <div>{ this.props.data.title }</div>
        <Button onClick={this.open}>Detail</Button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{ this.props.data.name }</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{ this.props.data.title }</h4>
            <h3>Descripition</h3>
            <p>{ this.props.data.lore }</p>
            <h3>Spells</h3>
            <div>{ mapToSpells(this.props.data.spells) }</div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.close}>Close</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

Champion.defaultProps =  {
  data: {
    name: 'CHAMPION_NAME'
  }
}

export default Champion;
