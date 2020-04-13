const { education, age, date } = require('../../lib/utils')
const Teacher =  require('../models/teacher')

module.exports = {
    index(req,res) {

        Teacher.all(( teachers ) => {
            
            return res.render('teachers/index', { teachers })
            
        });
        
    }, 
    create(req,res) {

        return res.render('teachers/create')

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

        Teacher.create(req.body, ( teacher ) => {

            return res.redirect(`/teachers`)
            
        }); 

    },
    show(req, res) {


        Teacher.find(req.params.id, ( teacher ) => {

            if (!teacher) res.send("Teacher not found!")

            teacher.created_at = date(teacher.created_at).format;

            teacher.birth_date = age(teacher.birth_date);   

            teacher.education_level = education(teacher.education_level);

            return res.render('teachers/show', { teacher })
        })

    },
    edit(req, res) {

        Teacher.find(req.params.id, ( teacher ) => {

            if (!teacher) res.send("Teacher not found!")

            teacher.birth_date = date(teacher.birth_date).iso;   

            return res.render('teachers/edit', { teacher })
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

        Teacher.update(req.body, () => {

            res.redirect(`teachers/${req.body.id}`)

        })

    },
    delete(req, res) {
        
        Teacher.delete(req.body.id, () => {

            return res.redirect('/teachers');
        })

    }
}
