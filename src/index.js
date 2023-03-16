const { Client } = require('pg')

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "films",
    password: "12345",
})

client.connect((error, res) => {
    if (error) {console.log(error)}
    else console.log("Подключено")} )

client.query('CREATE TABLE test(id BIGSERIAL, name TEXT)', (err, res) => {
    if (err) {
        console.log(err);
    }
})

client.query('INSERT INTO test (name) VALUES ($1)',["stroka"], (err, res) => {
    if (err) {
        console.log(err);
    }
})

client.query("SELECT * FROM test", (err, res) => {
    if (err) {
        console.log(err);
    }
    console.log(res.rows);
})
