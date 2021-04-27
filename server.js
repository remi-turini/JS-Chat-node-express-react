const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const {userJoin, getCurrentUser, userLeave, getRoomUsers} = require('./utils/user');
const {dbConnect, selectQuery, insertQuery} = require('./utils/query');
const mysql = require('mysql');
const moment = require('moment');
const bodyParser = require("body-parser");


const app = express();
const server = http.createServer(app);
const io = socketio(server);

const time = moment().format('lll');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

server.listen(8050, () => console.log('Ecoute sur le port 8050'));

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
// })

//Database connect
const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "root",
    database : "irc"

});
db.connect(function(err) {

    if (err) //throw err
    //console.log(err);

    console.log("Connecté à la base de données MySQL!");
});



const botName = 'Chat-Bot';

//Run when client connects
io.on('connection', socket => {

    console.log('Connection établie!');

    socket.on('joinRoom', ({ username, room}) => {
        
        const user = userJoin(socket.id, username, room);

        socket.join(user.room);

        //Welcome current user
        socket.emit('message', formatMessage(botName, 'Welcome to Chat-app!'));

        //Broadcast when a user connects
        socket.broadcast.to(user.room).emit('message', formatMessage(botName, `${user.username} has joined the chat`));

        //Send users and room info
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    });

    
    //Listen for chatMessage
    socket.on('chatMessage', msg  => {
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit('message', formatMessage(user.username, msg));
        db.query(`INSERT INTO message (room, pseudo, texte, date_heure) VALUES ('${user.room}', '${user.username}' ,'${msg}', '${time}')`);
    })

    //Runs when client disconnects
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);
        
        if(user) {
            io.to(user.room).emit('message', formatMessage(botName, `${user.username} has left the chat`));
        };
        
        //Send users and room info
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    });
});


app.get('/getRoom', (req, res) => {
    db.query("SELECT room_name FROM room",(err, result) => {
        if(err)
            console.log(err);
        else {
            res.send(result);
        }
    });
});

app.post('/insertRoom', (req, res) => {
    const room_name = req.body.room_name; 
    var sqlInsert = "INSERT INTO room ( room_name ) VALUES ( ? )";
    db.query(sqlInsert, room_name, (err, result) => {
        if(err)
            console.log(err);
        else {
            res.send('Successfully insert!');
        }
    })
})

app.delete('/deleteRoom/:room_name', (req, res) => {
    db.query(`DELETE FROM room WHERE room_name = ?`, req.params.room_name, (err, result) => {
        if(err)
            console.log(err);
        else
            res.send('Deleted successfully!');
    })
})



app.get('/getMessage', (req, res) => {
    db.query(`SELECT room, pseudo, texte, date_heure FROM message ORDER BY message.id_message ASC`, function (err, row) {
        if(err)
            console.log(err);
        else {
            res.json({
                message: row
            })
        }
    });
});


