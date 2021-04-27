import "../../style/css/style.css";
import logo from "../../img/logo.svg";
import React, { useState } from "react";
import Axios from "axios";

//Output room_name from database on option select 
fetch('http://localhost:8050/getRoom').then(async response => {
    let data = await response.json();
    console.log(data[0].room_name);
    const roomSelect = document.getElementById('roomSelect');
    for(var i = 0 ; i < data.length ; i++) {
        const div = document.createElement('option');
        div.innerHTML = `${data[i].room_name}`;
        if(roomSelect)
        roomSelect.appendChild(div);
    }
})

export default function FormConnect() {

    const [room_name, setRoom_name] = useState("");

    // Insert  room_name from input
    const submitReview = () => {
        Axios.post("http://localhost:8050/insertRoom", {
            room_name: room_name
        }).then(() => {
            alert(`Room ${room_name} created!`);
            document.location.reload();
        });
    };



    // Delete room_name from select
    const deleteReview = () => {
        var selectElmt = document.getElementById("roomSelect");
        var textselectionne = selectElmt.options[selectElmt.selectedIndex].text;
        Axios.delete(`http://localhost:8050/deleteRoom/${textselectionne}`, {
        }).then(() => {
            alert(`Room ${textselectionne} deleted`);
            document.location.reload();
        });
    };


    return (
        <form action="chat" className="formConnect">
            <div className="divLogo">
                <img src={logo} alt=""/>
            </div>

            <div className="username">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Enter your username" required />
            </div>

            <div className="room">
                <label htmlFor="room">Room</label>
                <select name="room" id="roomSelect"></select>
                <button type="submit">Join chat</button>
                <button type="submit" onClick={deleteReview}>Delete chat</button>
            </div>
            

            <hr/>

            <div className="createRoom">
                <label htmlFor="room">Create room</label>
                <input type="text" name="createRoom" id="createRoom" onChange={(e) => { setRoom_name(e.target.value) }} placeholder="Enter a name for new channel" />
                <button type="submit" onClick={submitReview}>Create chat</button>
            </div>
        </form>
    )
}
