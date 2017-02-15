import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          
          {/*<!-- HEADER -->*/}
          <nav className="navbar navbar-inverse">
            
            <ul className="nav navbar-nav">
              <li><Link to="/search">검색</Link></li>
              <li><Link to="/rank">랭킹</Link></li>
              <li><Link to="/champion">챔피언</Link></li>
              <li><Link to="/multiSearch">멀티서치</Link></li>
            </ul>
          </nav>
          {this.props.children}
          
          {/*<!-- ANGULAR DYNAMIC CONTENT -->*/}
          <div></div>

        </div>
        
      </div>
    );
  }
}

export default App;
