const express = require('express')
const cors = require('cors')
const { connect } = require('./db/db')
const conn = require('./db/db')

const app = express()

app.use(cors())

app.get('/', (req, res) => { 
  const sql = `SELECT arnia.id AS id, luogo, ultima_visita, nota, trattamento, colore, data_nascita, 
  COUNT(melario.id) AS numero_melari, SUM(melario.numero_telai_miele) AS numero_telai_miele,
  SUM(melario.numero_telai_vuoti) AS numero_telai_vuoti, 
  SUM(melario.numero_telai_da_costruire) AS numero_telai_da_costruire
  FROM arnia JOIN regina on (arnia.regina_id = regina.id) JOIN melario on (arnia.id = melario.arnia_id) 
  GROUP BY arnia.id;`

  conn.query(sql, (err, result) => {
    if(err) throw err    
    res.json(result) 
  })
})

app.get('/arnia/:id', (req, res) => { 
  const sql = `SELECT * FROM arnia 
                JOIN regina on (arnia.regina_id = regina.id)
                JOIN melario on (arnia.id = melario.arnia_id)
                JOIN telaio on (arnia.id = telaio.arnia_id)
                WHERE arnia.id = ${req.params.id}`

  console.log(req.params.id)
  conn.query(sql, (err, result) => {
    if(err) throw err
    console.log(result)    
    res.json(result) 
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