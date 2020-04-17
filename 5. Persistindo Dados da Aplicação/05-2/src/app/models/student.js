const db = require('../../config/db');
const { date } = require('../../lib/utils');

module.exports = {
    all(callback) {

        db.query('SELECT * FROM students ORDER BY name ASC', (err, results) => {
            if (err) throw `Database error! ${err}`;

            callback(results.rows);
        })
    },
    create(data, callback) {

        var query = `insert into students (
            name,
            email,
            birth_date,
            year,
            hours,
            avatar_url
        ) VALUES ($1, $2, $3, $4, $5, $6) returning id`

        var values = [
            data.name,
            data.email,
            date(data.birth_date).iso,
            data.year,
            data.hours,
            data.avatar_url
        ]

        db.query(query, values, (err, results) => {
            if (err) throw `Database error! ${err}`

            return callback()
        })
    },
    find (id, callback) {

        db.query('SELECT * FROM students WHERE id = $1', [ id ], (err, results) => {
            if (err) throw `Database error! ${err}`

            callback(results.rows[0])
        })
    },
    update (data, callback) {

        var query = `UPDATE students SET
            name = $1,
            email = $2,
            birth_date = $3,
            year = $4,
            hours = $5,
            avatar_url = $6
        `

        var values = [
            data.name,
            data.email,
            data.birth_date,
            data.year,
            data.hours,
            data.avatar_url
        ]

        db.query(query, values, (err, results) => {

            if (err) throw `Database error! ${err}`

            callback()

        })
    },
    delete(id, callback) {

        db.query('DELETE FROM students WHERE id = $1', [ id ], (err, results) => {

            if (err) throw `Database error! ${err}`

            callback()
        })

    }
}