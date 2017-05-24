const express = require('express');
const router = express.Router();

Category = require('../models/category.js');

//list all articles
router.get('/articles', (req, res, next) => {
    res.render('manage_articles', {
        title : 'Manage Articles'
    });
});

//list all categories
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

//add new article
router.get('/articles/add', (req, res, next) => {
    res.render('add_article', {
        title : 'Create Article'
    });
});

//add new category
router.get('/categories/add', (req, res, next) => {
    res.render('add_category', {
        title : 'Add Category'
    });
});

//edit article
router.get('/articles/edit/:id', (req, res, next) => {
    res.render('edit_articles', {
        title : 'Edit Articles'
    });
});

//edit category
router.get('/categories/edit/:id', (req, res, next) => {
    res.render('edit_category', {
        title : 'Edit Category'
    });
});

module.exports = router;
