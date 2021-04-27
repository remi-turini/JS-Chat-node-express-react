const moment = require('moment');
const mysql = require('mysql');
//moment().format('h:mm a')



//Database connect

const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "root",
    database : "irc"

});

function dbConnect() {
    
    db.connect(function(err) {
    
    if (err) throw err;
    
    console.log("Connecté à la base de données MySQL!");
    });
}

function selectQuery() {

    db.query(`SELECT room, pseudo, texte, date_heure FROM message`, function (err, row) {
    
        if (err) throw err;
    
        JSON.stringify(row);
    
        for(var i = 0 ; i < row.length ; i++) {
        
            result = row;
    
        }
        console.log(result[0]);
    });
}

function insertQuery() {
    db.query(`INSERT INTO message (room, pseudo, texte, date_heure) VALUES ('${user.room}', '${user.username}' ,'${msg}'), '${time}'`);
}

module.exports = {dbConnect, selectQuery, insertQuery};