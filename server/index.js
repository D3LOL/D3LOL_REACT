'use strict';

const app = require('./app');
const http = require('http').Server(app)
const PORT = process.env.PORT || 9000;
const io = require('socket.io')(http)




var rooms = [];


io.on('connection', function(socket){

	socket.on('joinroom', function(data){
		socket.join(data.room)
		if(!rooms.includes(data.room)){
				console.log("새로운 룸 생성")
				rooms[data.room] = {}
				rooms[data.room].userlist = {}
				rooms[data.room].userlist[data.name] = {}
		} else {
			rooms[data.room].userlist[data.name] = {}
		}
		console.log(rooms[data.room].userlist)
		io.sockets.in(data.room).emit('broadcast message', {mesg: data.name + '님이 입장하셨습니다.'})
		io.sockets.in(data.room).emit('userlist', {userlist: Object.keys(rooms[data.room].userlist)})
	})


	socket.on('sendMessageToroom', function(data){
		console.log("메시지 받았", data)
		io.sockets.in(data.room).emit('getMessage', {message: data.message})
	})
    

	
})



http.listen(9000, ()=>{
	console.log("Socket")
})



