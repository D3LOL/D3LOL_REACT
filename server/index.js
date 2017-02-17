'use strict';

const app = require('./app');
const http = require('http').Server(app)
const PORT = process.env.PORT || 9000;
const io = require('socket.io')(http)






io.on('connection', function(socket){

	socket.emit('news', {hello: 'world'})
	socket.on('my other event', function(data){
	console.log(data)
	})

})



http.listen(9000, ()=>{
	console.log("Socket")
})



