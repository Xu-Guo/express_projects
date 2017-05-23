const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//port
const port = 3000;

//Init application
const app = express();

//mongodb setup
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/todoapp';

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')));

//View setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Connect to mongodb
MongoClient.connect(url, (err, database) => {
    console.log('MongoDB connected...');
    if(err){
        throw err;
    }
    db = database;
    Todos = db.collection('todos');

    //start server
    app.listen(port, () => {
        console.log('Server running on port '+port);
    });

});

app.get('/', (req, res, next) => {
    Todos.find({}).toArray((err, todos) => {
        if(err){
            return console.log(err);
        }
        res.render('index', {
            todos : todos
        });
    });
});
