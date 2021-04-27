const roomList = document.getElementById('room')

roomList.addEventListener('submit', (e) => {
    e.preventDefault();

    //Emit message to server
    socket.on('query2', room_result => {
        console.log(room_result);

            for(var i = 0 ; i < room_result.length ; i++) {
                    const div = document.createElement('div');
                    div.classList.add('message');
                    div.innerHTML = `<p class="meta">${room_result[i].pseudo} <span>${room_result[i].date_heure}</span></p>
                    <p class="text">
                        ${room_result[i].texte}
                    </p>`;
                    document.querySelector('.chat-messages').appendChild(div);
            }
        });
    })
});