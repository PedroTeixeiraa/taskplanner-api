const mysql = require('mysql');

const secret = require('./secret')

let connection

const getConnection = async () => {
    const secrets = await secret.getSecret();
    connection = await mysql.createConnection({
        host: secrets.host,
        user: secrets.username,
        database: secrets.dbname,
        password: secrets.password,
    })

    connection.connect((err) => {
        if (err) throw err;
    });
};

getConnection()

const getTasks = (request, response) => {
    const query = 'SELECT * FROM task ORDER BY id ASC';
    connection.query(query, (err, result) => {
        if (err) throw err;
        response.json(result)
    });
}

const createTask = (request, response) => {
    const { nome } = request.body
    const concluida = 0

    const query = 'INSERT INTO task (nome, concluida) VALUES (?, ?)';

    connection.query(query, [nome, concluida], (err, result) => {
        if (err) throw err;
        response.status(201).json({ id: result.insertId });
    });
}

const updateTask = (request, response) => {
    const { id } = request.params;
    const { nome, concluida } = request.body;
    const query = 'UPDATE task SET nome = ?, concluida = ? WHERE id = ?';

    connection.query(query, [nome, concluida, id], (err) => {
        if (err) throw err;

        response.sendStatus(200);
    });
}

const deleteTask = (request, response) => {
    const { id } = request.params;
    const query = 'DELETE FROM task WHERE id = ?';

    connection.query(query, [id], (err) => {
        if (err) throw err;

        response.sendStatus(204);
    });
}

module.exports = {
    getTasks,
    updateTask,
    createTask,
    deleteTask,
}