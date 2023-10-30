const express = require("express")
const path = require("path")

const caminhoBase = path.join(__dirname)

const app =express()


app.get('/', (requisicao, resposta) =>{
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000!")
})