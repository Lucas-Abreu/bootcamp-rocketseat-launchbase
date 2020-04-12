const { Pool } = require("pg");

module.exposts = new Pool({
    user: "Lucas",
    password: "Javascript",
    host: "localhost",
    port: 5432,
    database: "my_teacher"
})