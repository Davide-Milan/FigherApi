const mysql = require('mysql')

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'figherapi',
    port: '3306',
    password: 'root'
})


conn.connect((err) => {
    if(!err){
        console.log('Connected!!!');
    } else {
        console.log(err)
    }
})

conn.end((err) => {
    if(!err){
        console.log('Disconnected!!!');
    } else {
        console.log('Disconnection failed...')
    }
})

module.exports = conn