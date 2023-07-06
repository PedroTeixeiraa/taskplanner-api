const express = require('express');
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Teste sucesso Deploy' })
})

app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`);
});
