
const { exec } = require('child_process');
const mysqldump = require('mysqldump');
  
// dump the result straight to a file
mysqldump({
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'irc',
    },
    dumpToFile: './dump.sql',
});