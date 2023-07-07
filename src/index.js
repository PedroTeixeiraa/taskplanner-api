const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/tasks', db.getTasks)
app.post('/tasks', db.createTask)
app.put('/tasks/:id', db.updateTask)
app.delete('/tasks/:id', db.deleteTask)

app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`);
});
