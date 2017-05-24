const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('articles', {
        title : 'Articles'
    });
});

router.get('/show/:id', (req, res, next) => {
    res.render('article', {
        title : 'Article'
    });
});

router.get('/category/:category_id', (req, res, next) => {
    res.render('articles', {
        title : 'Category Articles'
    });
});


module.exports = router;
