const express = require('express');
const router = express.Router();

const Category = require('../models/category.js');
const Article = require('../models/article.js');

//list all articles -GET
router.get('/articles', (req, res, next) => {
    Article.getArticles((err, articles) => {
        res.render('manage_articles', {
            title : 'Manage Articles',
            articles : articles
        });
    });
});

//list all categories - GET
router.get('/categories', (req, res, next) => {
    Category.getCategories((err, categories) => {
        if(err){
            res.send(err);
        }

        console.log(categories);
        res.render('manage_categories', {
            title : 'Manage Categories',
            categories : categories
        });
    });
});

//add new article. render add_article.js - GET
router.get('/articles/add', (req, res, next) => {
    //list existing categories for new article
    Category.getCategories((err, categories) => {
        if(err){
            res.send(err);
        }
        res.render('add_article', {
            title : 'Create Article',
            categories : categories
        });
    });
});

//add new category, render add_category - GET
router.get('/categories/add', (req, res, next) => {
    res.render('add_category', {
        title : 'Add Category'
    });
});

//edit category, render edit_category -GET
router.get('/categories/edit/:id', (req, res, next) => {
    Category.getCategoryById(req.params.id, (err, category) => {
        if(err){
            res.send(err);
        }
        res.render('edit_category', {
            title : 'Edit Category',
            category : category
        });
    });

});

//edit article, render edit_article -GET
router.get('/articles/edit/:id', (req, res, next) => {
    Article.getArticleById(req.params.id, (err, article) => {
        if(err){
            res.send(err);
        }
        Category.getCategories((err, categories) => {
            res.render('edit_article', {
                title : 'Edit Article',
                article : article,
                categories : categories
            });
        });
    });
});

module.exports = router;
