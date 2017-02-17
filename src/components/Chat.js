import React from 'react';
import { Button } from 'react-bootstrap';


    var socket = io()
    socket.on('news', function (data) { 
    console.log(data)
    });
    socket.emit('my other event', { my: 'data' });


class Chat extends React.Component {





	render(){
		return (
			<div>
				<>


			</div>
		)



	}
}