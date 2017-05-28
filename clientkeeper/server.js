const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

const mongojs = require('mongojs');
const db = mongojs('clientkeeper', ['client']);

//set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.send('Please use /api/clients');
});

//get clients - GET
app.get('/api/clients', (req, res, next) => {
    db.clients.find().sort({first_name : 1}, (err, clients) => {
        if (err) {
            res.send(err);
        }
        res.json(clients);
    });
});

//add client - POST
app.post('/api/clients', (req, res, next) => {
    db.clients.insert(req.body, (err , client) => {
        if (err) {
            res.send(err);
        }
        res.json(client);
    });
});

//update client - PUT
app.put('/api/clients/:id', (req, res, next) => {
    const id = req.params.id;
    db.clients.findAndModify({
        query : {
            _id : mongojs.ObjectId(id)
        },
        update : {
            $set : {
                first_name : req.body.first_name,
                last_name : req.body.last_name,
                email : req.body.email,
                phone : req.body.phone
            }
        },
        new : true
    }, (err, client) => {
        res.json(client);
    });
});

//delete client - DELETE
app.delete('/api/clients/:id', (req, res, next) => {
    const id = req.params.id;
    db.clients.remove({
        _id : mongojs.ObjectId(id)
    }, (err , client) => {
        if (err) {
            res.send(err);
        }
        res.json(client);
    });
});

//start server
app.listen(port, () => {
    console.log('Server running on port: '+port);
});
