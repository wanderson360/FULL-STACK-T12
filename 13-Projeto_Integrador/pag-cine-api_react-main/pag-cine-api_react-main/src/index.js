const express = require('express');
const cors = require('cors')

const routes = require('./routes/index')

const app = express();

app.use(cors())
app.use(express.json()) // Content-type
app.use(routes) // Carregar rotas


app.listen(3333, () => { // Porta para evitar conflito com outras apps tipo React
  console.log('server rodando na porta 3333')
})