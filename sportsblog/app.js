const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const expressValidator = require('express-validator');

//port
const port = 3000;

//init app
const app = express();

//view setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//express messages
app.use(require('connect-flash')());
app.use(function (req, res, next){
    res.locals.message = require('express-messages')(req, res);
    next();
});

//express validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      const namespace = param.split('.')
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

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(port, () => {
    console.log('Server running on port ' +port);
});
