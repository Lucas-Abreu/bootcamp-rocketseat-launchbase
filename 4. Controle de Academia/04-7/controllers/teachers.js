const fs = require('fs')
const data = require('../data')

const { age, graduation, date } = require('../utils')

exports.redirect = function(req, res)
{
    return res.redirect('/teachers')
}

exports.create = function(req, res)
{
    return res.render('teachers/create')
}

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
    {
        return res.send('Sorry, teacher not found!')
    }

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
        birth: date(foundTeacher.birth).iso
    }


    return res.render('teachers/edit', { teacher })
}

exports.put = function(req, res)
{
    const { id } = req.body
    let index = 0
 
    const foundTeacher = data.teachers.find(function(teacher, foundIndex) {
        if (teacher.id == id) {
            index = foundIndex
            return true
        }
    })

    const teacher =
    {
        ...foundTeacher,
        ...req.body,
        id: Number(req.body.id),
        birth: Date.parse(req.body.birth)
    }

    data.teachers[index] = teacher

    fs.writeFile('./data.json', JSON.stringify(data, null, 2), function(err)
    {
        if (err) return res.send('Write File Error!')

        return res.redirect(`/teachers/${id}`)
    })
}

exports.delete = function(req, res)
{
    const { id } = req.body
    
    const filteredTeachers = data.teachers.filter(function(teacher)
    {
        return teacher.id != id
    })

    data.teachers = filteredTeachers

    fs.writeFile('./data.json', JSON.stringify(data, null, 2), function(err)
    {
        if (err) return res.send('Write File Error!')

        return res.redirect(`/teachers`)
    })
}

exports.index = function(req, res)
{

    let teachers = []

    for (teacher of data.teachers)
    {
        const newTeacher =
        {
            ...teacher,
            areas: teacher.areas.split(',')
        }

        teachers.push(newTeacher)
    }

    return res.render('teachers/index', { teachers })
}