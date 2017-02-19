import React from 'react';
const io = require('socket.io-client')  




class Chat extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			userlist: "none",
			broadcastmessage: "None",
			message: []
		}
	
	}



	componentDidMount() {
		this.socket = io()
    	this.socket.on('getMessage', this.getMessage.bind(this))
    	this.socket.on('broadcast message', this.broadcastmess.bind(this))
    	this.socket.on('userlist', this.userlist.bind(this))
	}

	getMessage(data){
		var result = this.state.message
		result.push(data.message)
    	this.setState({
    			message: result
    	})
	}

	broadcastmess(data){
		this.setState({
    			broadcastmessage: data.mesg
    	})
	}

	userlist(data){
		var result = ''
		for(var i = 0; i < data.userlist.length; i++) {
			result += data.userlist[i]
		}
		this.setState({
    			userlist: result
    	})
	}

	joinroom(roomname, name){
		this.socket.emit('joinroom', { room: roomname, name: name })
	}

	sendMessageToroom(roomname, message){
		this.socket.emit('sendMessageToroom', { room:roomname, message:message })
	}

	broadcastMess(){
		var result = []
		for (var i = 0; i < this.state.message.length; i++){
			var temp = <div><br />{this.state.message[i]}</div>
			result.push(temp)
		}
		return result
	}

	render(){
		return (
			<div>
				"방 이름(방이 없으면 자동으로 새로 생성)"
				<input className='input' ref={argu => this.room = argu} />
				<br />
				"내 이름"
				<input className='input' ref={argu => this.name = argu} />	
				<br />
				"메시지 전송"
				<input className='input' ref={argu => this.message = argu} />	
				<br />
				<button className='input' onClick={()=>this.joinroom.bind(this)(this.room.value, this.name.value)}>Joinroom(방에 입장)</button>
				<button className='input' onClick={()=>this.sendMessageToroom.bind(this)(this.room.value, this.message.value)}>Sendmessage</button>
				<br />
				{'USERLIST in Room : s' + this.state.userlist}
				<br />
				{this.broadcastMess.bind(this)()} 
				
			</div>
		)

	}
}

export default Chat