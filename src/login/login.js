

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/style.css'
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  changename(e){
    this.setState({
      username: e.target.value
    })
  }

  changepassword(e){
    this.setState({
      password: e.target.value
    })
  }

  detectpassword(){

  }

  render(){

  	return(
  	   <div>
  	    <div className="body"></div>
		<div className="grad"></div>
		<div>
			<div className="header">
				<div>Rock <span> L.O.L</span></div>
			</div>
			<div className="login">
					<input type="text" onChange={(e)=>{this.changename.bind(this)(e)}} placeholder="username" name="user" /><br />
					<input type="password" onChange={(e)=>{this.changepassword.bind(this)(e)}} placeholder="password" name="password" /><br />
					<input type="button" value="Login" onClick={this.detectpassword.bind(this)}/>
			</div>
		</div>
	  </div>
	 
	)
  }

}


function stateTo (state) {
  return {
  }
}

function dispatchTo(dispatch) {
  return {
  }
}



export default connect(stateTo, dispatchTo)(Login)


  

