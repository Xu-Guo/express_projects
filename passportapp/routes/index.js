const express = require('express');
const router = express.Router();

const passport = require('passport');
const loaclStrategy = require('passport-local').Strategy;

let User = require('../models/user');

//Home page
router.get('/', (req, res, next) => {
    res.render('index', {
        title: "Index"
    });
});

//register form
router.get('/register', (req, res, next) => {
    res.render('register', {
        title: "Index"
    });
});

//Login form
router.get('/login', (req, res, next) => {
    res.render('login', {
        title: "Login"
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

    if (errors) {
        res.render('register', {
            errors: errors
        })
    } else {
        const newUser = new User({
            name: name,
            username: username,
            email: email,
            password: password
        });

        User.registerUser(newUser, (err, user) => {
            if (err) {
                throw err;
            }
            req.flash('success_msg', 'You are registered and can log in:)');
            res.redirect('/login')
        });
    }
});

//Local Strategy
passport.use(new loaclStrategy((username, password, done) => {
    User.getUserByUsername(username, (err, user) => {
        if (!user) {
            if (err) {
                throw err;
            }
            return done(null, false, {
                message: 'User not found...'
            });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) {
                throw err;
            }
            if (isMatch) {
                return done(null, user);
            } else {
                return done(null, false, {
                    message: 'Wrong passowrd...'
                });
            }
        })
    });
}));

//Serialize/Deserialize  User
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

//Login Processing
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next)
});
module.exports = router;
