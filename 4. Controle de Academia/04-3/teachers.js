const fs = require('fs')
const data = require('./data')

exports.post = function(req, res)
{
   
    const keys = Object.keys(req.body)

    for (key of keys)
    {
        if (req.body[key] == "")
        {
            res.send('Please, fill all fields!')
        }
    }

    let {avatar_url, name, birth, scholarship, type, area} = req.body

    birth = Date.parse(birth)
    let since = Date.now()
    let id = Number(data.teachers.length) + 1

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        scholarship,
        type,
        area,
        since
    })

    fs.writeFile('./data.json', JSON.stringify(data, null, 2), function(err)
    {
        if (err) return res.send("Write File Error!")

        return res.redirect('/teachers')
    })

}