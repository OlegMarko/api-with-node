const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const ItemController = require('./controllers/ItemController');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

db.connect('mongodb://localhost:27017/', 'node_api', (error) => {
    if (error) {
        return console.log(error);
    }

    app.listen(port, () => {
        console.log('API start ...');
    });
});

app.get('/', (req, res) => {
    res.status(200)
        .json({ 'code': 200, 'message': 'Simple API with NodeJS v0.1' });
});
app.get('/items', ItemController.all);
app.get('/items/:id', ItemController.findByID);
app.post('/items', ItemController.create);
app.put('/items/:id', ItemController.update);
app.delete('/items/:id', ItemController.delete);
