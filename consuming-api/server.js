const cors = require("cors")
const express = require("express")
const axios = require("axios")
const app = express()

app.use(cors())

// Servindo a API

app.get("/", async(req,res) => {

  const {data} = await axios("https://jsonplaceholder.typicode.com/users")
  console.log(data)

  return res.json(data)
})

// Criando uma rota
app.listen("4567")