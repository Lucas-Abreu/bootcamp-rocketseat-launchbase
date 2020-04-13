const db = require('../../config/db');
const date = require('../../lib/utils');

module.exports = {
    all(callback) {

        db.query('SELECT * FROM students ORDER BY name ASC', (err, results) => {
            if (err) throw `Database error! ${err}`;

            callback(results.rows);
        })
    },
}