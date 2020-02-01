const express = require('express')
const nunjucks = require('nunjucks')
const cards = require('./data')

const server = express()

server.set('view engine','njk')

server.use(express.static('public'))

nunjucks.configure('views',
{
    express: server,
    noCache: true,
    autoescape: false    
})

server.get('/', function(req, res)
{
    res.render('courses', { cards })
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id; 

    const card = cards.find(function(found)
    {
        return found.id == id
    })

    if (card)
    {
        res.render('description', { card })
    } else {
        res.render('not-found')
    }
});

server.get('/about', function(req, res)
{
    res.render('about')
})

server.use(function(req, res)
{
    res.status(404).render("not-found");
});

server.listen(5000, function()
{
    console.log('Server started!')
})