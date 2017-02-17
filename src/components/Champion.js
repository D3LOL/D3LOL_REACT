'use strict';

import React from 'react';
import { Button, Modal } from 'react-bootstrap';

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
            <h3>Spell</h3>
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



//   render() {

//     const championView = (
//         <div>
//           <img src={"http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+ this.props.data.key +"_0.jpg"} />
//           <div>{ this.props.data.name }</div>
//           <div>{ this.props.data.key }</div>
//           <div>{ this.props.data.title }</div>
//           <Button onClick={this.openModal}>Detail</Button>
//           <Modal show={this.state.showModal} onHide={this.closeModal}>
//             <Modal.Header closeButton>
//               <Modal.Title>Modal heading</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <h4>Text in a modal</h4>
//             </Modal.Body>
//             <Modal.Footer>
//               <button onClick={this.closeModal}>Close</button>
//             </Modal.Footer>
//           </Modal>
//         </div>
//     );

//     return (
//       <div className="col-md-4">
//         { championView }
//       </div>
//     );
//   }
// }