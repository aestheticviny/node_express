const express = require("express")
const path = require("path")

const caminhoBase = path.join(__dirname)

const app =express()

app.get('/', (require, resposta) =>{
    resposta.send("Estou funcionando com o express")
})

app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000!")
})