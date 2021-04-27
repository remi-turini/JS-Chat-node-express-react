import "../style/css/style.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import socketClient from 'socket.io-client';
import React from "react";
import { Route } from "react-router-dom";

export default class Chat extends React.Component {

    state = {
        message: null
    }

    componentDidMount() {
        var Qs = require('qs');
        const SERVER = "http://127.0.0.1:8050/";
        const socket = socketClient (SERVER);

        const chatForm = document.getElementById('chat-form');
        const roomName = document.getElementById('room-name');
        const userList = document.getElementById('users');



        // Get username and room from URL
        const {username, room} = Qs.parse(window.location.search, {
            ignoreQueryPrefix: true
        });


        //Join chatroom
        socket.emit('joinRoom', {username, room});

        //Get room and users
        socket.on('roomUsers', ({room, users}) => {
            outputRoomName(room);
            outputUsers(users);
        })

        //Message submit
        chatForm.addEventListener('submit', (e) => {
        e.preventDefault();

        //Get message text
        const msg = e.target.elements.msg.value;

        //Emit message to server
        socket.emit('chatMessage', msg);
        console.log(msg);

        //Clear input
        e.target.elements.msg.value = '';
        e.target.elements.msg.focus();
        });

        //Message from server
        socket.on('message', message => {
            console.log(message);
            outputMessage(message);
        });

        //Output message to DOM
        function outputMessage(message) {
            const div = document.createElement('div');
            div.classList.add('message');
            div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
            <p class="text">
                ${message.text}
            </p>`;
            document.querySelector('.wrapperMsg').appendChild(div);
        }

        //Add room name to DOM
        function outputRoomName(room) {
            if(roomName)
            roomName.innerText = room;
        }

        //Add users to DOM
        function outputUsers(users) {
            if(userList){
                userList.innerHTML = `${users.map(user => `<li>${user.username}</li>`).join('')}`;
            }
        }

        //Output message to DOM from database
        fetch('http://localhost:8050/getMessage').then(async response => {
            let data = await response.json();
            this.setState({ message: data.message });
            for(var i = 0 ; i < this.state.message.length ; i++) {
                if(this.state.message[i].room === room) {
                    const div = document.createElement('div');
                    div.classList.add('message');
                    div.innerHTML = `<p class="meta">${this.state.message[i].pseudo} <span>${this.state.message[i].date_heure}</span></p>
                    <p class="text">
                        ${this.state.message[i].texte}
                    </p>`;
                    document.querySelector('.wrapperMsg').appendChild(div);
                }
            }
        })
        

    }
    render() {
        return(
            <Route path="/chat">
                <Header />
                <Sidebar />
                <Main/>
            </Route>
        )
    }
}