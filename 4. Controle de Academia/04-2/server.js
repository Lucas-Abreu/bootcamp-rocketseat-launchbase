const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.set('view engine','njk')

server.use(express.static('public'))
server.use(routes)

nunjucks.configure('views',
{
    express: server,
    noCache: true,
    autoescape: false    
})

server.listen(5000, function()
{
    console.log('Server started!')
})