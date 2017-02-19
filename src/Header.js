import React, { Component } from 'react';
// import logo from './logo.svg';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Portal from 'react-portal';
import './Header.css';
import ModalConductor from './components/modals/ModalConductor'
import ModalWrapper from './components/modals/ModalWrapper'


// <ModalWrapper currentModal={this.props.currentModal} />
class Header extends Component {
  logInButton(){
      return <Link style={{cursor:"pointer"}}>로그인</Link>;
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <nav className="navbar navbar-inverse">
            <ul className="nav navbar-nav">
              <li><Link to="/search">검색</Link></li>
              <li><Link to="/rank">랭킹</Link></li>
              <li><Link to="/champion">챔피언</Link></li>
              <li><Link to="/multiSearch">멀티서치</Link></li>

              <li><Link to="/login">로그인</Link></li>
              <li><Link to="/Chat">Chat</Link></li>
        

              <li>
                <Portal closeOnEsc closeOnOutsideClick openByClickOn={this.logInButton()}>
                 <div className="modalbox">
                    <a href="/auth/facebook" class="btn btn-primary"><span class="fa fa-facebook"></span> Facebook</a>
                    <a href="/serverTest" class="btn btn-primary"><span class="fa fa-facebook"></span> test</a>
                    <a href="/logout" class="btn btn-primary"><span class="fa fa-facebook"></span> test</a>
                 </div>
               </Portal>
              </li>
            </ul>
          </nav>
          {this.props.children}
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
        auth: state.Auth.auth,
        token: state.Auth.token
    }
}

export default connect(mapStateToProps)(Header);
