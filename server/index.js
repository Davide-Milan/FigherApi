
const express = require('express')
const { connect } = require('./db/db')
const conn = require('./db/db')

const app = express()

app.get('/', (req, res) => { 
  const sql = `select * from arnia`
  conn.query(sql, (err, result) => {
    if(err) throw err    
    console.log(result[0])
    res.send(`${JSON.stringify(result[0])}`) 
  })
})

app.post('/', (req, res) => {
  res.send('<h1>Hello Worldaaaaa!</h1>')
  console.log('post')
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})