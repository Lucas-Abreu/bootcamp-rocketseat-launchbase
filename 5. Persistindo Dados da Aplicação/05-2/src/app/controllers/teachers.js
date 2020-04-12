const { grade, date } = require('../../lib/utils')

module.exports = {
    index(req,res) {

        return res.render('teachers/index', { teachers })
        
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

        let {avatar_url, name, birth, year, hours} = req.body

        return

    },
    show(req, res) {

    },
    edit(req, res) {

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

        let {avatar_url, name, birth, year, hours} = req.body

        return

    },
    delete(req, res) {
        return
    }
}
