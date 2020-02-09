const fs = require('fs')
const data = require('./data')

const { age, graduation, date } = require('./utils')

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

    let {avatar_url, name, birth, scholarship, type, areas} = req.body

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
        areas,
        since
    })

    fs.writeFile('./data.json', JSON.stringify(data, null, 2), function(err)
    {
        if (err) return res.send("Write File Error!")

        return res.redirect('/teachers')
    })

}

exports.show = function(req, res)
{
   
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(foundTeacher)
    {
        return foundTeacher.id == id
    })

    if (!foundTeacher)
        return res.send('Sorry, teacher not found!')

    const teacher = 
    {
        ...foundTeacher,
        birth: age(foundTeacher.birth),
        areas:foundTeacher.areas.split(','),
        since: new Intl.DateTimeFormat('en-US').format(foundTeacher.since),
        scholarship: graduation(foundTeacher.scholarship)
    }

    return res.render('teachers/show', { teacher })
}

exports.edit = function(req, res)
{    
    
    const { id } = req.params

    const foundTeacher = data.teachers.find(function(teacher)
    {
        return teacher.id == id
    })

    if (!foundTeacher)
        return res.send('Sorry, teacher not found!')

    const teacher =
    {
        ...foundTeacher,
        birth: date(foundTeacher.birth)
    }


    return res.render('teachers/edit', { teacher })
}