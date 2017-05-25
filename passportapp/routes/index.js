const express = require('express');
const router = express.Router();

let User = require('../models/user');

//Home page
router.get('/', (req, res, next) => {
    res.render('index',{
        title : "Index"
    });
});

//register form
router.get('/register', (req, res, next) => {
    res.render('register',{
        title : "Index"
    });
});

//Login form
router.get('/login', (req, res, next) => {
    res.render('login',{
        title : "Login"
    });
});

//Process register
router.post('/register', (req, res, next) => {
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const password2 = req.body.password2;

    req.checkBody('name', 'Name is required...').notEmpty();
    req.checkBody('username', 'Username is required...').notEmpty();
    req.checkBody('email', 'Email is required...').notEmpty();
    req.checkBody('email', 'Email is must be a valid email address...').isEmail();
    req.checkBody('password', 'Password is required...').notEmpty();
    req.checkBody('password2', 'Passwords do not match...').equals(req.body.password);

    let errors = req.validationErrors();

    if(errors){
        res.render('register',{
            errors : errors
        })
    } else {
        const newUser = new User({
            name : name,
            username : username,
            email : email,
            password : password
        });

        User.registerUser(newUser, (err, user) => {
            if(err){
                throw err;
            }
            req.flash('success_msg', 'You are registered and can log in:)');
            res.redirect('/login')
        });
    }
});

module.exports = router;
