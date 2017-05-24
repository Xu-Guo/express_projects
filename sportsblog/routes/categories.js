const express = require('express');
const router = express.Router();

Category = require('../models/category.js');

router.get('/', (req, res, next) => {
    Category.getCategories((err, categories) => {
        if(err){
            res.send(err);
        }

        console.log(categories);
        res.render('categories',{
            title : 'Categories',
            categories : categories
        });
    });
});

module.exports = router;
