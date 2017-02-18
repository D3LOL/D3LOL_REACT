<<<<<<< HEAD

=======
>>>>>>> champion component update
import React from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import ChampionSpell from './ChampionSpell.js'

class Champion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
    this.open = this.open.bind(this); // MODAL OPEN BIND
    this.close = this.close.bind(this); // MODAL CLOSE BIND
  }

  // CHAMPION MODAL WINDOW CLOSE
  close(){
    this.setState({ showModal: false })
  }

  // CHAMPION MODEL WINDOW OPEN
  open(){
    this.setState({ showModal: true }) 
  }

  render() {

    // STYLE START

      // LONG TEXT ALIGN LEFT
    const alignLeft = {
      textAlign: "Left"
    };

      // CHAMPION PROFILE PICTURE
    const imgStyle = {
      width: "80px",
      height: "80px"
    };

      //CHAMPION MODAL INTRO PICTURE
    const champModalPic = {
      width: "100%"
    }

       //CHAMPION MODAL SKIN PICTURE

    const champSkinPic = {
      width: "100%",
      marginBottom: "10px"
    }

    // STYLE END

    // COMPONENT
    const mapToSkins = data => {
      return data.map((skins, i) => {
        if(skins.num !== 0) {
          return (
            <div className="col-md-6">
              <img style={champSkinPic} src={"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+ this.props.data.key + "_"+ skins.num +".jpg"} />
            </div>
          );
        }
      })
    }


    const mapToTags = data => {
      return data.map((tag, i) => {
        if(i === 0) {
          return (
            <span className="champion-index-name">{"#" + tag + " "}</span>
          );  
        } else {
          return (
            <span className="champion-index-name">{"#" + tag}</span>
          );
        }
      })
    }

      // CHAMPION STATS VIEW
    const championStatView = (
      <div>
        <Table>
          <tbody>
            <tr>
              <td>체력</td>
              <td style={alignLeft}>{this.props.data.stats.hp + " (+" + this.props.data.stats.hpperlevel + " 레벨 당)"}</td>
              <td>체력재생</td>
              <td style={alignLeft}>{this.props.data.stats.hpregen + " (+" + this.props.data.stats.hpregenperlevel + " 레벨 당)"}</td>
            </tr>
            <tr>
              <td>공격력</td>
              <td style={alignLeft}>{this.props.data.stats.attackdamage + " (+" + this.props.data.stats.attackdamageperlevel + " 레벨 당)"}</td>
              <td>방어력</td>
              <td style={alignLeft}>{this.props.data.stats.armor + " (+" + this.props.data.stats.armorperlevel + " 레벨 당)"}</td>
            </tr>
            <tr>
              <td>공격속도</td>
              <td style={alignLeft}>{this.props.data.stats.attackspeedoffset + " (+" + this.props.data.stats.attackspeedperlevel + " 레벨 당)"}</td>
              <td>마법 저항력</td>
              <td style={alignLeft}>{this.props.data.stats.spellblock + " (+" + this.props.data.stats.spellblockperlevel + " 레벨 당)"}</td>
            </tr>
            <tr>
              <td>이동속도</td>
              <td style={alignLeft}>{this.props.data.stats.movespeed}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );

        // http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/FiddleSticks.png
        // <img style={imgStyle} src={"http://ddragon.leagueoflegends.com/cdn/7.3.3/img/champion/"+ this.props.data.key +".png"} onClick={this.open} />


    return (
      <div className="col-md-1 col-sm-2 col-xs-3">
        <img style={imgStyle} src={"http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/"+ this.props.data.key +".png"} onClick={this.open} />
        <p className="champion-index-name">{ this.props.data.name }</p>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton className="championModalHeader">
            <Modal.Title>
              <h1>{ this.props.data.name + " (" + this.props.data.key +")"}</h1>
              <p>{ this.props.data.title }</p>
              <p>{ mapToTags(this.props.data.tags) }</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
<<<<<<< HEAD
            <h4>{ this.props.data.title }</h4>
            <h3>Descripition</h3>
            <p dangerouslySetInnerHTML={{__html: this.props.data.lore}}></p>
            <h3>Spells</h3>
            <div>{ mapToSpells(this.props.data.spells) }</div>
=======
            <img style={champModalPic} src={"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + this.props.data.key + "_0.jpg"} />
            <h3 style={alignLeft}>기본 스탯</h3>
            { championStatView }
            <h3 style={alignLeft}>스킬</h3>
            <ChampionSpell passive={this.props.data.passive} skills={this.props.data.spells} />
            <h3 style={alignLeft}>배경 스토리</h3>
            <div id="champion-lore" style={alignLeft} dangerouslySetInnerHTML={{__html: this.props.data.lore}}></div>
            <h3 style={alignLeft}>스킨</h3>
            <div style={champModalPic}>
              { mapToSkins(this.props.data.skins) }
            </div>
>>>>>>> champion component update
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
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

