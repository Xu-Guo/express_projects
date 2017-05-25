const express = require('express');
const path = require('path');
const bodyParser =require('body-parser');
const exphds = require('express-handlebars');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');

//port
const port = 3000;

//route files
const index = require('./routes/index');
const users = require('./routes/users');

//init app
const app = express();

//view engine setup
app.engine('handlebars', exphds({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');

//body parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//express session
app.use(session({
    secret : 'secret',
    saveUninitialized : true,
    resave : true
}));

//express messages
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

//express validator
app.use(expressValidator({
  errorFormatter: (param, msg, value) => {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use('/', index);
app.use('/users', users);

//start server
app.listen(port, () => {
    console.log('Server started on port '+port);
});
