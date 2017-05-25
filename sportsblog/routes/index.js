const express = require('express');
const router = express.Router();

const Article = require('../models/article.js');

router.get('/', (req, res, next) => {
    Article.getArticles((error, articles) => {
        res.render('index', {
            title : 'Index',
            articles : articles
        });
    }, 4);
});

module.exports = router;
