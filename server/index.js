
const express = require('express')
const conn = require('./db/db')

const app = express()

app.get('/', (req, res) => { 
  console.log(conn.query(`select * from arnia where id='1' `)[0])  
  conn.end()
  res.send('<h1>Hello Worldaa!</h1>') 
})

app.post('/', (req, res) => {
  res.send('<h1>Hello Worldaaaaa!</h1>')
  console.log('post')
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})