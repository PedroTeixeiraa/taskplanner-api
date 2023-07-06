require('dotenv/config');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
});

connection.connect((err) => {
    if (err) throw err;
});

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