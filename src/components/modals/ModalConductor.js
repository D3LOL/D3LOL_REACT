import React from 'react';
import {connect} from 'react-redux';

// import ExportDataModal from './ExportDataModal.jsx';
import SignInModal from './SignIn.js';
// import FeedbackModal from './FeedbackModal.jsx';
// import BoxDetailsModal from './BoxDetailsModal.jsx';
import * as actions from '../../actions.js';


const ModalConductor = props => {
  switch (props.currentModal) {
   
    case 'SOCIAL_SIGN_IN':
      return <SignInModal {...props}/>;

    default:
      return null;
  }
};



export default connect(state => state, () => actions)(ModalConductor);
