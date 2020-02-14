const fs = require('fs')
const data = require('../data')

const { grade, date } = require('../utils')

exports.create = function(req, res)
{
    return res.render('students/create')
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

    let {avatar_url, name, birth, year, hours} = req.body

    birth = Date.parse(birth)
    let id = Number(data.students.length) + 1

    data.students.push({
        id,
        avatar_url,
        name,
        birth,
        year,
        hours
    })

    fs.writeFile('./data.json', JSON.stringify(data, null, 2), function(err)
    {
        if (err) return res.send("Write File Error!")

        return res.redirect('/students')
    })

}

exports.show = function(req, res)
{
   
    const { id } = req.params

    const foundStudent = data.students.find(function(foundStudent)
    {
        return foundStudent.id == id
    })

    if (!foundStudent)
        return res.send('Sorry, student not found!')

   
    const student = 
    {
        ...foundStudent,
        birth: date(foundStudent.birth).birthDay,
        year: grade(foundStudent.year)
    }

    return res.render('students/show', { student })
}

exports.edit = function(req, res)
{    
    
    const { id } = req.params

    const foundStudent = data.students.find(function(student)
    {
        return student.id == id
    })

    if (!foundStudent)
        return res.send('Sorry, student not found!')

    const student =
    {
        ...foundStudent,
        birth: date(foundStudent.birth).iso
    }


    return res.render('students/edit', { student })
}

exports.put = function(req, res)
{
    const { id } = req.body
    let index = 0
 
    const foundStudent = data.students.find(function(student, foundIndex) {
        if (student.id == id) {
            index = foundIndex
            return true
        }
    })

    const student =
    {
        ...foundStudent,
        ...req.body,
        id: Number(req.body.id),
        birth: Date.parse(req.body.birth)
    }

    data.students[index] = student

    fs.writeFile('./data.json', JSON.stringify(data, null, 2), function(err)
    {
        if (err) return res.send('Write File Error!')

        return res.redirect(`/students/${id}`)
    })
}

exports.delete = function(req, res)
{
    const { id } = req.body
    
    const filteredStudents = data.students.filter(function(student)
    {
        return student.id != id
    })

    data.students = filteredStudents

    fs.writeFile('./data.json', JSON.stringify(data, null, 2), function(err)
    {
        if (err) return res.send('Write File Error!')

        return res.redirect(`/students`)
    })
}

exports.index = function(req, res)
{

    let students = []

    for (student of data.students)
    {
        const newStudent =
        {
            ...student,
            year: grade(student.year)
        }

        students.push(newStudent)
    }

    return res.render('students/index', { students })
}