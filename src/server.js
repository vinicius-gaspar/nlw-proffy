//Servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, pageSuccess, saveClasses } = require('./pages')

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

//Start do servidor
server
//receber os dados do req body
.use(express.urlencoded({ extended: true }))
//configurar arquivos estáticos
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/success", pageSuccess)
.post("/save-classes", saveClasses)
.listen(5500)

