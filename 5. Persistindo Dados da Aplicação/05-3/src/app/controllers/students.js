const { grade, date, age } = require('../../lib/utils')
const Student = require ("../models/student")

module.exports = {
    index(req,res) {
        
        Student.all(( students ) => {
            return res.render('students/index', { students });
        })
        
    }, 
    create(req,res) {

        Student.findTeachers( (teachers) => {

            return res.render('students/create', { teachers })

        })

    }, 
    post(req, res) {

        const keys = Object.keys(req.body)

        for (key of keys)
        {
            if (req.body[key] == "")
            {
                res.send('Please, fill all fields!')
            }
        }

        Student.create(req.body, () => {
            return res.redirect(`/students`)
        })

    },
    show(req, res) {

        Student.find(req.params.id, ( student ) => {
            
            if (!student) res.send("Student not found!")

            student.birth_date = age(student.birth_date);

            student.year = grade(student.year);

            return res.render('students/show', { student });

        })
        
    },
    edit(req, res) {

        Student.find(req.params.id, ( student ) => {
            
            if (!student) res.send("Student not found!")

            student.birth_date = date(student.birth_date).iso;

            return res.render('students/edit', { student });

        })

    },
    put(req, res) {

        const keys = Object.keys(req.body)

        for (key of keys)
        {
            if (req.body[key] == "")
            {
                res.send('Please, fill all fields!')
            }
        }

        Student.update(req.body, () => {

            return res.redirect('/students')

        })

    },
    delete(req, res) {
        
        Student.delete(req.body.id, () => {

            return res.redirect('/students')
        })

    }
}