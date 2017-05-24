const express = require('express');
const router = express.Router();

const Article = require('../models/article.js');

router.get('/', (req, res, next) => {
    Article.getArticles((err, articles) => {
        if(err){
            res.send(err);
        }

        console.log(articles);
        res.render('articles',{
            title : 'Articles',
            articles : articles
        });
    });
});

router.get('/show/:id', (req, res, next) => {
    res.render('article', {
        title : 'Article'
    });
});

//list all existing categories for new article to select in the drop down
router.get('/category/:category_id', (req, res, next) => {
    res.render('articles', {
        title : 'Category Articles'
    });
});

//add Article - POST
router.post('/add', (req, res, next) => {
    console.log('Add Article...');
    let article = new Article();
    article.title = req.body.title;
    article.subtitle = req.body.subtitle;
    article.category = req.body.category;
    article.author = req.body.author;
    article.body = req.body.body;
    // article.title = req.body.title;
    Article.addArticle(article, (err, article) => {
        if(err){
            res.send(err);
        }
        console.log('Add Article..')
        res.redirect('/manage/articles');
    });
});

//Edit article - POST
router.post('/edit/:id', (req, res, next) => {
    let article = new Article();
    const query = {
        _id : req.params.id,
    }
    const update = {
        title : req.body.title,
        subtitle : req.body.subtitle,
        category : req.body.category,
        author : req.body.author,
        body : req.body.body

    }
    Article.updateArticle(query, update, {}, (err, article) => {
        if(err){
            res.send(err);
        }
        console.log('Edit Article..')
        res.redirect('/manage/articles');
    });
});


module.exports = router;
